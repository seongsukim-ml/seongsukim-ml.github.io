#!/usr/bin/env python3
"""
Markdown Posts to JSON Converter

This script converts Markdown files in the posts/ directory to JSON format.
Each Markdown file should have YAML front matter with post metadata.

Usage:
    python convert_posts.py

Requirements:
    Python 3.x (no external dependencies)
"""

import json
import re
from datetime import datetime, date
from pathlib import Path


def parse_front_matter(front_matter_text):
    """
    Minimal YAML-like parser for this project's front matter schema.
    Supports:
      - key: "value"
      - key: value
      - key:
          - item1
          - item2
    """
    metadata = {}
    current_list_key = None

    for raw_line in front_matter_text.splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            continue

        list_match = re.match(r'^\s*-\s+(.*)$', line)
        if list_match and current_list_key:
            item = list_match.group(1).strip()
            item = item.strip('"').strip("'")
            metadata[current_list_key].append(item)
            continue

        key_match = re.match(r'^([A-Za-z0-9_]+):\s*(.*)$', line)
        if key_match:
            key = key_match.group(1).strip()
            value = key_match.group(2).strip()

            if value == '':
                metadata[key] = []
                current_list_key = key
            else:
                metadata[key] = value.strip('"').strip("'")
                current_list_key = None

    return metadata


def parse_markdown_file(filepath):
    """
    Parse a Markdown file with YAML front matter.

    Returns:
        dict: Post metadata and content
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for front matter
    front_matter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)$', content, re.DOTALL)

    if not front_matter_match:
        print(f"⚠️  Warning: No front matter found in {filepath}")
        return None

    front_matter_text = front_matter_match.group(1)
    post_content = front_matter_match.group(2)

    metadata = parse_front_matter(front_matter_text)

    # Validate required fields
    required_fields = ['title', 'date', 'category', 'excerpt']
    for field in required_fields:
        if field not in metadata:
            print(f"❌ Error: Missing required field '{field}' in {filepath}")
            return None

    slug = metadata.get('id') or Path(filepath).stem

    raw_date = metadata['date']
    if isinstance(raw_date, (datetime, date)):
        date_str = raw_date.strftime('%Y-%m-%d')
    else:
        date_str = str(raw_date)

    # Build post object
    post = {
        'id': slug,
        'slug': slug,
        'title': metadata['title'],
        'date': date_str,
        'category': metadata['category'],
        'excerpt': metadata['excerpt'],
    }

    # Add optional fields
    if 'tags' in metadata:
        post['tags'] = metadata['tags']
    else:
        post['tags'] = []

    # Standardize all post links to one dynamic template route.
    post['link'] = f'posts/post-template.html?slug={slug}'

    # Keep markdown body for post page rendering.
    post['content'] = post_content.strip()

    return post


def convert_posts_to_json(posts_dir='posts', output_file='data/posts.json', content_dir='data/post-content'):
    """
    Convert all Markdown files in posts_dir to JSON.

    Args:
        posts_dir (str): Directory containing Markdown posts
        output_file (str): Output JSON file path
    """
    posts_path = Path(posts_dir)

    if not posts_path.exists():
        print(f"❌ Error: Directory '{posts_dir}' does not exist")
        print(f"💡 Creating directory '{posts_dir}'...")
        posts_path.mkdir(parents=True, exist_ok=True)
        return

    # Find all Markdown files
    md_files = list(posts_path.glob('*.md'))

    if not md_files:
        print(f"⚠️  No Markdown files found in '{posts_dir}'")
        return

    print(f"📂 Found {len(md_files)} Markdown file(s)")

    # Parse all posts
    posts = []
    for md_file in md_files:
        print(f"📄 Processing: {md_file.name}")
        post = parse_markdown_file(md_file)
        if post:
            posts.append(post)
            print(f"   ✅ Successfully parsed")
        else:
            print(f"   ❌ Failed to parse")

    if not posts:
        print("❌ No valid posts found")
        return

    # Sort by date (newest first)
    posts.sort(key=lambda x: x['date'], reverse=True)

    # Create output directory if it doesn't exist
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write list JSON (summary only)
    list_posts = []
    for post in posts:
        list_posts.append({
            'id': post['id'],
            'title': post['title'],
            'date': post['date'],
            'category': post['category'],
            'excerpt': post['excerpt'],
            'tags': post['tags'],
            'link': post['link']
        })

    output_data = {'posts': list_posts}

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    # Write per-post content JSON
    content_path = Path(content_dir)
    content_path.mkdir(parents=True, exist_ok=True)

    for post in posts:
        content_file = content_path / f"{post['slug']}.json"
        with open(content_file, 'w', encoding='utf-8') as f:
            json.dump(post, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Successfully converted {len(posts)} post(s) to {output_file}")
    print(f"✅ Generated post content files in {content_dir}")


def create_example_post():
    """Create an example Markdown post for reference."""
    posts_dir = Path('posts')
    posts_dir.mkdir(exist_ok=True)

    example_file = posts_dir / 'example-post.md'

    if example_file.exists():
        print(f"⚠️  Example file already exists: {example_file}")
        return

    example_content = """---
title: "Getting Started with Academic Blogging"
date: "2026-02-03"
category: "Tutorial"
tags:
  - Web Development
  - Academic Writing
  - Tutorial
excerpt: "Learn how to set up and maintain an academic blog using this modern, fast, and elegant template."
link: "posts/example-post.html"
---

# Getting Started with Academic Blogging

Welcome to your new academic blog! This post will guide you through the basics of creating and managing blog posts using Markdown.

## Why Markdown?

Markdown is a lightweight markup language that's:

- **Easy to write**: Simple syntax that's readable even in plain text
- **Portable**: Works everywhere, from GitHub to academic journals
- **Flexible**: Can be converted to HTML, PDF, and more

## Writing Your First Post

Create a new `.md` file in the `posts/` directory with the following structure:

```markdown
---
title: "Your Title"
date: "2026-02-03"
category: "Research"
tags:
  - Your Tags
excerpt: "Your excerpt"
---

# Your Content Here
```

## Markdown Basics

### Headings

Use `#` for headings:

```markdown
# H1
## H2
### H3
```

### Emphasis

- **Bold**: `**text**`
- *Italic*: `*text*`

### Lists

Unordered:
- Item 1
- Item 2

Ordered:
1. First
2. Second

### Links

[Link text](https://example.com)

### Code

Inline code: `code`

Code block:
```python
def hello():
    print("Hello, World!")
```

## Next Steps

1. **Create more posts**: Add `.md` files to the `posts/` directory
2. **Run the converter**: `python convert_posts.py`
3. **View your blog**: Open `index.html` in your browser

Happy blogging! 🎉
"""

    with open(example_file, 'w', encoding='utf-8') as f:
        f.write(example_content)

    print(f"✅ Created example post: {example_file}")


def main():
    """Main function."""
    print("=" * 60)
    print("📝 Markdown Posts to JSON Converter")
    print("=" * 60)
    print()

    # Check if posts directory exists
    if not Path('posts').exists():
        print("📁 Creating posts/ directory...")
        Path('posts').mkdir(exist_ok=True)
        print("📄 Creating example post...")
        create_example_post()
        print()
        print("💡 Add your Markdown posts to the posts/ directory")
        print("   Then run this script again to convert them to JSON")
        return

    # Convert posts
    convert_posts_to_json()

    print()
    print("=" * 60)
    print("✅ Done!")
    print("=" * 60)


if __name__ == '__main__':
    main()
