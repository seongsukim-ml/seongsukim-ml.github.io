# Academic Portfolio Blog

A clean, modern academic portfolio website built with HTML, CSS, and JavaScript. All content is managed through JSON files for easy updates.

## 📁 Project Structure

```
new_blog/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styling and responsive design
├── js/
│   └── main.js            # Dynamic content loading and interactions
├── data/
│   ├── profile.json       # Personal information and bio
│   ├── publications.json  # Publications list
│   ├── news.json         # News and announcements
│   └── projects.json     # Research projects
└── README.md             # This file
```

## 🚀 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **JSON-based Content Management**: Easy to update without touching HTML
- **Dynamic Filtering**: Filter publications by year
- **Smooth Animations**: Modern UI with hover effects and transitions
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📝 Updating Content

### Profile Information (`data/profile.json`)

Update your personal information, bio, research interests, and social links:

```json
{
  "name": "Your Name",
  "email": "your.email@university.edu",
  "bio": ["Paragraph 1", "Paragraph 2"],
  "research_interests": ["Interest 1", "Interest 2"]
}
```

### Publications (`data/publications.json`)

Add or edit publications:

```json
{
  "publications": [
    {
      "title": "Paper Title",
      "authors": ["Author 1", "Author 2"],
      "venue": "Conference Name",
      "year": 2024,
      "type": "conference",
      "award": "Best Paper",
      "selected": true,
      "links": {
        "pdf": "https://arxiv.org/...",
        "code": "https://github.com/..."
      }
    }
  ]
}
```

### News Items (`data/news.json`)

Add announcements and news:

```json
{
  "news": [
    {
      "date": "2024-01-15",
      "title": "News Title",
      "content": "News content with [markdown links](https://example.com)",
      "icon": "🎉"
    }
  ]
}
```

### Projects (`data/projects.json`)

Manage your research projects:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "category": "research",
      "importance": 1,
      "links": {
        "paper": "https://...",
        "code": "https://..."
      }
    }
  ]
}
```

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Sections

- Add or remove sections in `index.html`
- Update navigation links in the `<nav>` element
- Modify section content in the corresponding JSON files

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be available at `https://username.github.io/repository-name`

### Local Testing

Simply open `index.html` in a web browser. For proper JSON loading, you may need to:

1. Use a local web server:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser

### Static Hosting

Upload files to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Google Cloud Storage

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Maintenance

### Adding New Features

1. **New Section**: Add HTML structure in `index.html`, styling in `style.css`, and rendering logic in `main.js`
2. **New Data Type**: Create JSON file in `data/` folder and update loading logic in `main.js`

### Performance Tips

- Optimize images before uploading
- Minify CSS and JavaScript for production
- Use a CDN for better global performance

## 📄 Data Schema Reference

### profile.json
- `name`: Your full name
- `email`: Contact email
- `affiliation`: University/Institution
- `bio`: Array of paragraph strings
- `research_interests`: Array of research interest strings
- `social`: Object with `github` and `scholar` usernames

### publications.json
- `title`: Paper title
- `authors`: Array of author names
- `venue`: Conference/Journal name
- `year`: Publication year
- `type`: "conference" | "preprint" | "journal"
- `award`: Optional award badge
- `selected`: Boolean for featured papers
- `links`: Object with link types (pdf, code, slides)

### news.json
- `date`: ISO date string (YYYY-MM-DD)
- `title`: News title
- `content`: News content (supports markdown links)
- `icon`: Optional emoji icon
- `inline`: Boolean for display style

### projects.json
- `title`: Project name
- `description`: Project description
- `category`: "research" | "study" | etc.
- `importance`: Number for sorting (1 = highest)
- `links`: Object with link types (paper, code, demo)

## 🆘 Troubleshooting

**Issue**: Content not loading
- **Solution**: Make sure you're running a local server, not opening file directly

**Issue**: JSON parsing errors
- **Solution**: Validate JSON files at [jsonlint.com](https://jsonlint.com/)

**Issue**: Styling not applied
- **Solution**: Clear browser cache or hard refresh (Ctrl+F5)

## 📧 Contact

For questions or suggestions, contact: seongsu.kim@kaist.ac.kr

## 📄 License

This project is open source and available for academic use.

---

Made with ❤️ for researchers
