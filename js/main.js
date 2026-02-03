// ===== Global Variables =====
let profileData = null;
let publicationsData = null;
let newsData = null;
let projectsData = null;
let postsData = null;
let authorsData = null;
let themesData = null;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load theme preference
        loadThemePreference();

        await loadAllData();
        initializeApp();
    } catch (error) {
        console.error('Error initializing app:', error);
        displayErrorMessage();
    }
});

// ===== Theme Management =====
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcon(savedTheme);
    // Color theme will be loaded after data is loaded
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);

    // Re-apply color theme for new mode
    const currentColorTheme = localStorage.getItem('colorTheme') || 'default';
    applyColorTheme(currentColorTheme, newTheme);

    // Update theme picker preview if modal is open
    if (!document.getElementById('theme-modal').classList.contains('hidden')) {
        renderThemePicker();
    }
}

function updateThemeToggleIcon(theme) {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function applyColorTheme(themeId, mode) {
    if (!themesData) return;

    const theme = themesData.themes.find(t => t.id === themeId);
    if (!theme) return;

    const colors = mode === 'light' ? theme.light : theme.dark;
    const root = document.documentElement;

    // Apply colors
    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });

    // Save preference
    localStorage.setItem('colorTheme', themeId);
}

function loadColorTheme() {
    const savedColorTheme = localStorage.getItem('colorTheme') || 'default';
    const currentMode = document.documentElement.getAttribute('data-theme') || 'light';
    applyColorTheme(savedColorTheme, currentMode);
    return savedColorTheme;
}

function renderThemePicker() {
    if (!themesData) return;

    const container = document.getElementById('theme-options');
    if (!container) return;

    const currentTheme = localStorage.getItem('colorTheme') || 'default';
    const currentMode = document.documentElement.getAttribute('data-theme') || 'light';

    container.innerHTML = '';

    themesData.themes.forEach(theme => {
        const option = document.createElement('div');
        option.className = 'theme-option';
        if (theme.id === currentTheme) {
            option.classList.add('active');
        }

        const header = document.createElement('div');
        header.className = 'theme-option-header';

        const icon = document.createElement('span');
        icon.className = 'theme-option-icon';
        icon.textContent = theme.icon;

        const name = document.createElement('div');
        name.className = 'theme-option-name';
        name.textContent = theme.name;

        header.appendChild(icon);
        header.appendChild(name);

        const description = document.createElement('div');
        description.className = 'theme-option-description';
        description.textContent = theme.description;

        const preview = document.createElement('div');
        preview.className = 'theme-option-preview';

        const colors = currentMode === 'light' ? theme.light : theme.dark;
        ['primary-color', 'secondary-color', 'accent-color'].forEach(colorKey => {
            const swatch = document.createElement('div');
            swatch.className = 'theme-color-swatch';
            swatch.style.backgroundColor = colors[colorKey];
            preview.appendChild(swatch);
        });

        option.appendChild(header);
        option.appendChild(description);
        option.appendChild(preview);

        option.addEventListener('click', () => {
            applyColorTheme(theme.id, currentMode);
            // Update active state
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Close modal after a short delay
            setTimeout(() => {
                document.getElementById('theme-modal').classList.add('hidden');
            }, 300);
        });

        container.appendChild(option);
    });
}

// ===== Data Loading Functions =====
async function loadAllData() {
    try {
        const [profile, publications, news, projects, posts, authors, themes] = await Promise.all([
            fetch('data/profile.json').then(res => res.json()),
            fetch('data/publications.json').then(res => res.json()),
            fetch('data/news.json').then(res => res.json()),
            fetch('data/projects.json').then(res => res.json()),
            fetch('data/posts.json').then(res => res.json()),
            fetch('data/authors.json').then(res => res.json()),
            fetch('data/themes.json').then(res => res.json())
        ]);

        profileData = profile;
        publicationsData = publications;
        newsData = news;
        projectsData = projects;
        postsData = posts;
        authorsData = authors;
        themesData = themes;
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}

// ===== App Initialization =====
function initializeApp() {
    loadColorTheme(); // Load saved color theme
    renderProfile();
    renderAbout();
    renderNews();
    renderPublications();
    renderPosts();
    renderProjects();
    renderThemePicker();
    setupEventListeners();
}

// ===== Profile Rendering =====
function renderProfile() {
    if (!profileData) return;

    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-title').textContent = profileData.title;
    document.getElementById('profile-affiliation').textContent =
        `${profileData.affiliation} · ${profileData.lab.name}`;

    // Profile Image
    if (profileData.profile_image) {
        const profileImage = document.getElementById('profile-image');
        profileImage.src = profileData.profile_image;
        profileImage.style.display = 'block';
    }

    // Email
    const emailLink = document.getElementById('profile-email');
    emailLink.href = `mailto:${profileData.email}`;
    emailLink.textContent = profileData.email;

    // Google Scholar
    const scholarLink = document.getElementById('profile-scholar');
    if (profileData.social && profileData.social.scholar) {
        scholarLink.href = `https://scholar.google.com/citations?user=${profileData.social.scholar}`;
        scholarLink.textContent = 'Scholar';
    }

    // GitHub
    const githubLink = document.getElementById('profile-github');
    if (profileData.social && profileData.social.github) {
        githubLink.href = `https://github.com/${profileData.social.github}`;
        githubLink.textContent = 'GitHub';
    }

    // LinkedIn
    const linkedinLink = document.getElementById('profile-linkedin');
    const linkedinSeparator = document.getElementById('linkedin-separator');
    if (profileData.social && profileData.social.linkedin) {
        linkedinLink.href = `https://www.linkedin.com/in/${profileData.social.linkedin}`;
        linkedinLink.textContent = 'LinkedIn';
        linkedinLink.style.display = 'inline-block';
        if (linkedinSeparator) {
            linkedinSeparator.style.display = 'inline';
        }
    }

    // Update site title
    document.getElementById('site-title').textContent = profileData.name;
}

// ===== About Section Rendering =====
function renderAbout() {
    if (!profileData) return;

    const aboutContainer = document.getElementById('about-content');
    aboutContainer.innerHTML = '';

    // Render bio paragraphs
    profileData.bio.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        aboutContainer.appendChild(p);
    });

    // Render research interests
    const interestsContainer = document.getElementById('research-interests-list');
    interestsContainer.innerHTML = '';

    profileData.research_interests.forEach(interest => {
        const tag = document.createElement('div');
        tag.className = 'interest-tag';
        tag.textContent = interest;
        interestsContainer.appendChild(tag);
    });
}

// ===== News Rendering =====
const NEWS_INITIAL_COUNT = 5;
let showAllNews = false;

function renderNews() {
    if (!newsData) return;

    const newsContainer = document.getElementById('news-container');
    const toggleContainer = document.getElementById('news-toggle-container');
    newsContainer.innerHTML = '';

    // Sort news by date (newest first)
    const sortedNews = [...newsData.news].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );

    sortedNews.forEach((item, index) => {
        const newsItem = createNewsElement(item);

        // Hide items beyond initial count if not showing all
        if (!showAllNews && index >= NEWS_INITIAL_COUNT) {
            newsItem.classList.add('hidden');
        }

        newsContainer.appendChild(newsItem);
    });

    // Show/hide toggle button
    if (sortedNews.length > NEWS_INITIAL_COUNT) {
        toggleContainer.style.display = 'flex';
        updateNewsToggleButton();
    } else {
        toggleContainer.style.display = 'none';
    }
}

function toggleNews() {
    showAllNews = !showAllNews;
    renderNews();
}

function updateNewsToggleButton() {
    const toggleBtn = document.getElementById('news-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = showAllNews ? 'Show Less News' : 'Show More News';
    }
}

function createNewsElement(item) {
    const newsDiv = document.createElement('div');
    newsDiv.className = 'news-item';

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'news-item-content';

    const dateDiv = document.createElement('div');
    dateDiv.className = 'news-date';
    dateDiv.textContent = formatDate(item.date);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'news-content';

    // Parse markdown-style links in content
    const contentHTML = parseMarkdownLinks(item.content);
    contentDiv.innerHTML = contentHTML;

    contentWrapper.appendChild(dateDiv);
    contentWrapper.appendChild(contentDiv);
    newsDiv.appendChild(contentWrapper);

    return newsDiv;
}

// ===== Utility Functions =====

/**
 * Find author data by name from authors.json
 * @param {string} authorName - Full name of the author (e.g., "Seongsu Kim")
 * @returns {object|null} Author data object or null if not found
 */
function findAuthorByName(authorName) {
    if (!authorsData || !authorsData.authors) return null;

    // Search through all authors to find a name match
    for (const [key, value] of Object.entries(authorsData.authors)) {
        if (value.name === authorName) {
            return value;
        }
    }

    return null;
}

/**
 * Toggle BibTeX citation display
 * @param {HTMLElement} button - The button element that was clicked
 * @param {HTMLElement} pubDiv - The publication container
 * @param {string} bibtexSource - BibTeX inline text or file path
 * @param {boolean} isFile - Whether bibtexSource is a file path
 */
async function toggleBibtex(button, pubDiv, bibtexSource, isFile) {
    const existingBox = pubDiv.querySelector('.bibtex-box');

    // If already expanded, collapse it
    if (existingBox) {
        existingBox.remove();
        button.textContent = 'BIBTEX';
        return;
    }

    // Create bibtex box
    const bibtexBox = document.createElement('div');
    bibtexBox.className = 'bibtex-box';

    // Show loading state
    button.textContent = 'LOADING...';

    try {
        // Get bibtex content
        let bibtexContent;
        if (isFile) {
            const response = await fetch(bibtexSource);
            if (!response.ok) throw new Error('Failed to load BibTeX file');
            bibtexContent = await response.text();
        } else {
            bibtexContent = bibtexSource;
        }

        // Create bibtex display
        const bibtexPre = document.createElement('pre');
        bibtexPre.className = 'bibtex-content';
        bibtexPre.textContent = bibtexContent;

        bibtexBox.appendChild(bibtexPre);
        pubDiv.appendChild(bibtexBox);

        button.textContent = 'HIDE BIBTEX';
    } catch (err) {
        console.error('Failed to load BibTeX:', err);
        button.textContent = 'BIBTEX';
        alert('Failed to load BibTeX citation');
    }
}

// ===== Publications Rendering =====
let currentYearFilter = 'all';
let showSelectedOnly = false;

function renderPublications(filterYear = 'all', selectedOnly = false) {
    if (!publicationsData) return;

    // Update state
    currentYearFilter = filterYear;
    showSelectedOnly = selectedOnly;

    const container = document.getElementById('publications-container');
    container.innerHTML = '';

    let filteredPubs = publicationsData.publications;

    // Apply year filter
    if (filterYear !== 'all') {
        filteredPubs = filteredPubs.filter(pub => pub.year === parseInt(filterYear));
    }

    // Apply selected filter
    if (selectedOnly) {
        filteredPubs = filteredPubs.filter(pub => pub.selected === true);
    }

    // Sort by year (newest first)
    filteredPubs.sort((a, b) => b.year - a.year);

    filteredPubs.forEach(pub => {
        const pubElement = createPublicationElement(pub);
        container.appendChild(pubElement);
    });

    if (filteredPubs.length === 0) {
        const message = selectedOnly ?
            'No selected publications found for the selected year.' :
            'No publications found for the selected year.';
        container.innerHTML = `<p class="text-center">${message}</p>`;
    }
}

function createPublicationElement(pub) {
    const pubDiv = document.createElement('div');
    pubDiv.className = 'publication-item';
    if (pub.selected) {
        pubDiv.classList.add('selected');
    }

    // Header with title and selected badge
    const header = document.createElement('div');
    header.className = 'pub-header';

    // Title
    const title = document.createElement('div');
    title.className = 'pub-title';
    title.textContent = pub.title;
    header.appendChild(title);

    // Selected badge
    if (pub.selected) {
        const selectedBadge = document.createElement('span');
        selectedBadge.className = 'selected-badge';
        selectedBadge.textContent = '⭐ Selected';
        header.appendChild(selectedBadge);
    }

    pubDiv.appendChild(header);

    // Authors (highlight Seongsu Kim, with clickable links)
    const authors = document.createElement('div');
    authors.className = 'pub-authors';
    const authorsText = pub.authors.map(author => {
        const authorData = findAuthorByName(author);
        const isMainAuthor = author === 'Seongsu Kim';

        // If author has a valid URL, make it clickable
        if (authorData && authorData.url && authorData.url !== '#') {
            const authorName = isMainAuthor ? `<strong>${author}</strong>` : author;
            return `<a href="${authorData.url}" target="_blank" class="author-link">${authorName}</a>`;
        }

        // Otherwise, just display the name
        return isMainAuthor ? `<strong>${author}</strong>` : author;
    }).join(', ');
    authors.innerHTML = authorsText;

    // Venue and year
    const venue = document.createElement('div');
    venue.className = 'pub-venue';
    venue.textContent = `${pub.venue}, ${pub.year}`;

    // Award badge with specific styling
    if (pub.award) {
        const award = document.createElement('span');
        award.className = 'pub-award';

        // Determine award class based on award type
        const awardLower = pub.award.toLowerCase();
        if (awardLower.includes('spotlight')) {
            award.classList.add('spotlight');
        } else if (awardLower.includes('oral')) {
            award.classList.add('oral');
        } else if (awardLower.includes('best')) {
            award.classList.add('best');
        } else if (awardLower.includes('poster')) {
            award.classList.add('poster');
        } else {
            award.classList.add('default');
        }

        award.textContent = pub.award;
        venue.appendChild(award);
    }

    pubDiv.appendChild(authors);
    pubDiv.appendChild(venue);

    // Keywords/Tags
    if (pub.keywords && pub.keywords.length > 0) {
        const keywordsDiv = document.createElement('div');
        keywordsDiv.className = 'pub-keywords';

        pub.keywords.forEach(keyword => {
            const keywordSpan = document.createElement('span');
            keywordSpan.className = 'pub-keyword';
            keywordSpan.textContent = keyword;
            keywordsDiv.appendChild(keywordSpan);
        });

        pubDiv.appendChild(keywordsDiv);
    }

    // Links
    const hasLinks = pub.links && Object.keys(pub.links).length > 0;
    const hasBibtex = (pub.bibtex && pub.bibtex.trim() !== '') || (pub.bibtex_file && pub.bibtex_file.trim() !== '');

    if (hasLinks || hasBibtex) {
        const linksDiv = document.createElement('div');
        linksDiv.className = 'pub-links';

        // Regular links (PDF, Code, etc.)
        if (hasLinks) {
            Object.entries(pub.links).forEach(([type, url]) => {
                const link = document.createElement('a');
                link.href = url;
                link.className = 'pub-link';
                link.textContent = type.toUpperCase();
                link.target = '_blank';
                linksDiv.appendChild(link);
            });
        }

        // BibTeX button
        if (hasBibtex) {
            const bibtexBtn = document.createElement('button');
            bibtexBtn.className = 'pub-link bibtex-btn';
            bibtexBtn.textContent = 'BIBTEX';

            // Determine if using file or inline bibtex
            const bibtexSource = pub.bibtex_file || pub.bibtex;
            const isFile = !!pub.bibtex_file;

            bibtexBtn.addEventListener('click', () => toggleBibtex(bibtexBtn, pubDiv, bibtexSource, isFile));
            linksDiv.appendChild(bibtexBtn);
        }

        pubDiv.appendChild(linksDiv);
    }

    return pubDiv;
}

// ===== Posts Rendering =====
function renderPosts() {
    if (!postsData) return;

    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    // Sort posts by date (newest first)
    const sortedPosts = [...postsData.posts].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );

    sortedPosts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

function createPostElement(post) {
    const card = document.createElement('div');
    card.className = 'post-card';

    // Header
    const header = document.createElement('div');
    header.className = 'post-header';

    const meta = document.createElement('div');
    meta.className = 'post-meta';

    const date = document.createElement('div');
    date.className = 'post-date';
    date.textContent = formatDate(post.date);

    const category = document.createElement('span');
    category.className = 'post-category';
    category.textContent = post.category;

    meta.appendChild(date);
    meta.appendChild(category);

    const title = document.createElement('div');
    title.className = 'post-title';
    title.textContent = post.title;

    header.appendChild(meta);
    header.appendChild(title);

    // Content
    const content = document.createElement('div');
    content.className = 'post-content';

    const excerpt = document.createElement('p');
    excerpt.className = 'post-excerpt';
    excerpt.textContent = post.excerpt;

    content.appendChild(excerpt);

    // Tags
    if (post.tags && post.tags.length > 0) {
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'post-tags';

        post.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'post-tag';
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });

        content.appendChild(tagsDiv);
    }

    // Read more link (only if link exists)
    if (post.link) {
        const readMore = document.createElement('a');
        readMore.href = post.link;
        readMore.className = 'post-link';
        readMore.textContent = 'Read More →';
        content.appendChild(readMore);
    }

    card.appendChild(header);
    card.appendChild(content);

    return card;
}

// ===== Projects Rendering =====
function renderProjects() {
    if (!projectsData) return;

    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    // Sort by importance
    const sortedProjects = [...projectsData.projects].sort((a, b) =>
        a.importance - b.importance
    );

    sortedProjects.forEach(project => {
        const projectElement = createProjectElement(project);
        container.appendChild(projectElement);
    });
}

function createProjectElement(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const content = document.createElement('div');
    content.className = 'project-content';

    // Category badge
    const category = document.createElement('span');
    category.className = 'project-category';
    category.textContent = project.category;

    // Title
    const title = document.createElement('div');
    title.className = 'project-title';
    title.textContent = project.title;

    // Description
    const description = document.createElement('div');
    description.className = 'project-description';
    description.textContent = project.description;

    content.appendChild(category);
    content.appendChild(title);
    content.appendChild(description);

    // Links
    if (project.links && Object.keys(project.links).length > 0) {
        const linksDiv = document.createElement('div');
        linksDiv.className = 'project-links';

        Object.entries(project.links).forEach(([type, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.className = 'project-link';
            link.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            link.target = '_blank';
            linksDiv.appendChild(link);
        });

        content.appendChild(linksDiv);
    }

    card.appendChild(content);
    return card;
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Theme picker button
    const themePicker = document.getElementById('theme-picker');
    if (themePicker) {
        themePicker.addEventListener('click', () => {
            document.getElementById('theme-modal').classList.remove('hidden');
        });
    }

    // Theme modal close button
    const modalClose = document.getElementById('theme-modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.getElementById('theme-modal').classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    const themeModal = document.getElementById('theme-modal');
    if (themeModal) {
        themeModal.addEventListener('click', (e) => {
            if (e.target === themeModal) {
                themeModal.classList.add('hidden');
            }
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // News toggle button
    const newsToggle = document.getElementById('news-toggle');
    if (newsToggle) {
        newsToggle.addEventListener('click', toggleNews);
    }

    // Publication year filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn[data-year]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all year filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter publications
            const year = button.getAttribute('data-year');
            renderPublications(year, showSelectedOnly);
        });
    });

    // Selected toggle button
    const selectedToggle = document.getElementById('selected-toggle');
    if (selectedToggle) {
        selectedToggle.addEventListener('click', () => {
            const isSelected = selectedToggle.getAttribute('data-selected') === 'true';
            const newState = !isSelected;

            selectedToggle.setAttribute('data-selected', newState);
            if (newState) {
                selectedToggle.classList.add('active');
            } else {
                selectedToggle.classList.remove('active');
            }

            renderPublications(currentYearFilter, newState);
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Utility Functions =====
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function parseMarkdownLinks(text) {
    // Parse markdown formatting
    // Order matters: process bold before italic to avoid conflicts

    // Bold: **text** or __text__
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Italic: *text* or _text_
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    text = text.replace(/_([^_]+)_/g, '<em>$1</em>');

    // Links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    return text;
}

function displayErrorMessage() {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
            <h1 style="color: #e74c3c;">⚠️ Error Loading Data</h1>
            <p>Please make sure all JSON files are present in the data folder.</p>
        </div>
    `;
}

// ===== Scroll Effects =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});
