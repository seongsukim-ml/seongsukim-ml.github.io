# 📁 Project Structure

## Directory Layout

```
new_blog/
├── index.html                 # Main entry point
├── README.md                  # Project overview and features
├── QUICK_START.md            # Quick setup guide (실행방법)
├── start.sh                   # Startup script
│
├── css/                       # Stylesheets
│   └── style.css             # Main stylesheet with themes
│
├── js/                        # JavaScript
│   └── main.js               # Main application logic
│
├── data/                      # Content (JSON files)
│   ├── profile.json          # Personal information
│   ├── publications.json     # Publication list
│   ├── news.json             # News and announcements
│   ├── projects.json         # Projects showcase
│   ├── posts.json            # Blog posts metadata
│   ├── authors.json          # Author information with links
│   ├── themes.json           # Color theme definitions
│   └── bibtex/               # BibTeX citation files
│       └── *.bib
│
├── assets/                    # Static files
│   ├── profile.jpg           # Profile photo
│   ├── Seongsu_Kim_CV.pdf   # Curriculum Vitae
│   └── pdf/                  # Slides, posters, etc.
│       └── *.pdf
│
├── posts/                     # Blog posts (Markdown)
│   ├── post-template.html    # Post page template
│   └── *.md                  # Markdown post files
│
├── docs/                      # Documentation
│   ├── BIBTEX_GUIDE.md       # BibTeX management guide
│   ├── COLOR_THEMES.md       # Theme customization
│   ├── DEPLOYMENT_GUIDE.md   # Deployment instructions
│   ├── MAINTENANCE.md        # Maintenance guide
│   ├── NEWS_MARKDOWN_GUIDE.md
│   ├── PDF_MANAGEMENT_GUIDE.md
│   ├── POSTS_GUIDE.md
│   ├── TROUBLESHOOTING.md    # Detailed troubleshooting
│   ├── ERROR_TROUBLESHOOTING.md  # Step-by-step error resolution
│   ├── SOLUTION_GUIDE.md     # Solution guide (해결_방법)
│   ├── DIAGNOSIS_AND_SOLUTION.md # Diagnosis guide
│   └── claude_update.md      # Change log and session recovery
│
├── scripts/                   # Utility scripts
│   └── convert_posts.py      # Convert Markdown to JSON
│
└── tests/                     # Test files
    ├── test.html             # Minimal loading test
    └── theme-preview.html    # Theme preview
```

## File Categories

### Essential Files (Root Level)
- `index.html` - Main page
- `README.md` - Overview
- `QUICK_START.md` - Quick start guide
- `start.sh` - Startup script

### Core Directories
- `css/` - Stylesheets
- `js/` - JavaScript
- `data/` - Content (JSON)
- `assets/` - Media files
- `posts/` - Blog posts

### Supporting Directories
- `docs/` - All documentation
- `scripts/` - Utility scripts
- `tests/` - Test pages

## Quick Access

### Start the Blog
```bash
./start.sh
# or
python3 -m http.server 8000
```

### View in Browser
```
http://localhost:8000
```

### Edit Content
- Profile: `data/profile.json`
- Publications: `data/publications.json`
- News: `data/news.json`
- Themes: `data/themes.json`

### Documentation
- Quick Start: `QUICK_START.md`
- Full Docs: `docs/README.md` (if exists)
- Troubleshooting: `docs/TROUBLESHOOTING.md`

## File Naming Conventions

### Markdown Documentation
- `UPPERCASE_WITH_UNDERSCORES.md` for guides
- `lowercase-with-hyphens.md` for posts

### JSON Data
- `lowercase.json` for all data files

### Scripts
- `lowercase_with_underscores.py` for Python
- `lowercase-with-hyphens.sh` for shell scripts

## Clean Structure Benefits

1. **Root is Clean** - Only essential files visible
2. **Docs Organized** - All guides in `docs/`
3. **Tests Separated** - Test files in `tests/`
4. **Scripts Grouped** - Utility scripts in `scripts/`
5. **Easy Navigation** - Clear directory purpose

---

**Last Updated**: February 4, 2026
