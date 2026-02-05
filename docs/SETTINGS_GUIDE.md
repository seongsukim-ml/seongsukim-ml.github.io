# ⚙️ Settings Guide

This guide explains how to configure various settings for your portfolio website.

## 📁 Settings Location

All settings are stored in `data/profile.json` under the `"settings"` object.

```json
{
  "name": "Your Name",
  ...
  "settings": {
    "news_initial_count": 3
  }
}
```

## 🎛️ Available Settings

### News Initial Count

Controls how many news items are displayed by default before the "Show More" button.

**Setting**: `news_initial_count`

**Type**: Number (integer)

**Default**: 3

**Valid Range**: 1 - 20 (recommended)

**Example**:
```json
"settings": {
  "news_initial_count": 3
}
```

**Usage**:
- Set to `3` for minimal display (default)
- Set to `5` for moderate display
- Set to `10` for extended display
- Set to `999` to show all news items (hide "Show More" button if total < 999)

**How it works**:
1. When the page loads, only the first N news items are visible
2. Older items are hidden
3. If total news > N, "Show More News" button appears
4. Clicking the button reveals all news items

### Future Settings

More settings will be added in future updates:

```json
"settings": {
  "news_initial_count": 3,
  "publications_per_page": 10,      // Coming soon
  "theme_default": "default",        // Coming soon
  "show_profile_image": true,        // Coming soon
  "enable_dark_mode": true          // Coming soon
}
```

---

## 📝 Examples

### Show 3 News Items (Minimal)
```json
"settings": {
  "news_initial_count": 3
}
```
Perfect for: Short attention spans, mobile-first design

### Show 5 News Items (Balanced)
```json
"settings": {
  "news_initial_count": 5
}
```
Perfect for: Active blogs with frequent updates

### Show 10 News Items (Extended)
```json
"settings": {
  "news_initial_count": 10
}
```
Perfect for: News-heavy sites, archives

### Show All News Items (No Button)
```json
"settings": {
  "news_initial_count": 999
}
```
Perfect for: Sites with few news items (<20 total)

---

## 🔧 How to Change Settings

### Step 1: Open profile.json
```bash
cd /path/to/new_blog/data
# Open with any text editor
nano profile.json
# or
code profile.json
```

### Step 2: Find or Add Settings Object
Look for the `"settings"` object near the end of the file:

```json
{
  "name": "Your Name",
  ...
  "social": {
    ...
  },
  "settings": {
    "news_initial_count": 3
  }
}
```

If `"settings"` doesn't exist, add it after `"social"`:

```json
  "social": {
    "github": "your-github",
    "scholar": "your-scholar-id"
  },
  "settings": {
    "news_initial_count": 3
  }
}
```

### Step 3: Modify the Value
Change the number to your desired value:

```json
"settings": {
  "news_initial_count": 5  // Changed from 3 to 5
}
```

### Step 4: Save and Refresh
1. Save the file
2. Refresh your browser (Cmd/Ctrl + Shift + R)
3. The new setting takes effect immediately

---

## ✅ Validation

### Check JSON Syntax
After editing, validate your JSON:

```bash
python3 -m json.tool data/profile.json
```

If valid, you'll see the formatted JSON.
If invalid, you'll see an error with the line number.

### Test the Changes
1. Open the site: `http://localhost:8000`
2. Count the visible news items
3. Check if "Show More News" button appears (if total news > initial count)

---

## 🐛 Troubleshooting

### Setting Not Working
**Problem**: Changed the setting but nothing happened

**Solutions**:
1. Clear browser cache (Cmd/Ctrl + Shift + R)
2. Check JSON syntax: `python3 -m json.tool data/profile.json`
3. Make sure the setting is inside the `"settings"` object
4. Check browser console for errors (F12 → Console)

### "Show More" Button Missing
**Problem**: Button doesn't appear even with many news items

**Cause**: `news_initial_count` is set higher than total news items

**Solution**:
- Count your news items in `data/news.json`
- Set `news_initial_count` to a lower number

### All News Items Showing
**Problem**: All news items visible, no "Show More" button

**Cause**: `news_initial_count` is too high (e.g., 999)

**Solution**: Set to a lower number like 3, 5, or 10

---

## 💡 Best Practices

### Recommended Values

| Scenario | Recommended | Reason |
|----------|-------------|--------|
| Personal blog (few updates) | 5-10 | Show most content upfront |
| Active researcher (frequent news) | 3-5 | Keep page concise |
| Archive/Portfolio | 3 | Highlight recent only |
| News-heavy site | 10-15 | More content visible |

### Performance Tips

- Lower values = faster page load
- Higher values = more scrolling required
- Consider total news count when setting

### UX Considerations

- **Too Low (1-2)**: Users must click button frequently
- **Too High (15+)**: Page becomes too long
- **Just Right (3-5)**: Balance between content and brevity

---

## 📚 Related Documentation

- [News Markdown Guide](NEWS_MARKDOWN_GUIDE.md) - How to write news items
- [Maintenance Guide](MAINTENANCE.md) - Regular updates
- [Profile Data Guide](../README.md#profile-data) - Profile.json structure

---

**Last Updated**: February 4, 2026
**File Location**: `data/profile.json`
**Default Value**: `news_initial_count: 3`
