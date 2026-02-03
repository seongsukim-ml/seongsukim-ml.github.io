# Color Theme Options

Your blog now supports **Light Mode** and **Dark Mode**! Below are additional color theme options you can use.

## Current Theme (Default)

**Light Mode:**
- Primary: Deep Blue (#1a365d)
- Secondary: Bright Blue (#2563eb)
- Accent: Red (#dc2626)

**Dark Mode:**
- Primary: Light Blue (#60a5fa)
- Background: Dark Gray (#111827)

---

## Alternative Theme Options

### 1. 🟢 Nature Green Theme (Professional & Fresh)

**Light Mode:**
```css
--primary-color: #065f46;
--secondary-color: #059669;
--accent-color: #ea580c;
```

**Dark Mode:**
```css
--primary-color: #34d399;
--secondary-color: #10b981;
--accent-color: #fbbf24;
--bg-color: #064e3b;
--bg-gray: #065f46;
```

---

### 2. 🟣 Royal Purple Theme (Academic & Elegant)

**Light Mode:**
```css
--primary-color: #581c87;
--secondary-color: #7c3aed;
--accent-color: #f59e0b;
```

**Dark Mode:**
```css
--primary-color: #a78bfa;
--secondary-color: #8b5cf6;
--accent-color: #fbbf24;
--bg-color: #1e1b4b;
--bg-gray: #312e81;
```

---

### 3. 🔵 Ocean Blue Theme (Modern & Clean)

**Light Mode:**
```css
--primary-color: #0c4a6e;
--secondary-color: #0284c7;
--accent-color: #dc2626;
```

**Dark Mode:**
```css
--primary-color: #38bdf8;
--secondary-color: #0ea5e9;
--accent-color: #fb7185;
--bg-color: #082f49;
--bg-gray: #0c4a6e;
```

---

### 4. 🟠 Warm Sunset Theme (Creative & Energetic)

**Light Mode:**
```css
--primary-color: #9a3412;
--secondary-color: #ea580c;
--accent-color: #7c2d12;
```

**Dark Mode:**
```css
--primary-color: #fdba74;
--secondary-color: #fb923c;
--accent-color: #fbbf24;
--bg-color: #431407;
--bg-gray: #7c2d12;
```

---

### 5. ⚫ Minimal Monochrome Theme (Ultra Professional)

**Light Mode:**
```css
--primary-color: #1f2937;
--secondary-color: #4b5563;
--accent-color: #059669;
```

**Dark Mode:**
```css
--primary-color: #d1d5db;
--secondary-color: #9ca3af;
--accent-color: #34d399;
--bg-color: #030712;
--bg-gray: #111827;
```

---

### 6. 🌸 Soft Pink Theme (Modern & Friendly)

**Light Mode:**
```css
--primary-color: #9f1239;
--secondary-color: #e11d48;
--accent-color: #7c3aed;
```

**Dark Mode:**
```css
--primary-color: #fb7185;
--secondary-color: #f43f5e;
--accent-color: #a78bfa;
--bg-color: #4c0519;
--bg-gray: #881337;
```

---

## How to Change Theme

1. Open `/css/style.css`
2. Find the `:root` section (around line 8)
3. Replace the color values with your chosen theme
4. For dark mode, update the `[data-theme="dark"]` section (around line 59)
5. Save and refresh your browser

## Award Color Customization

You can also customize award badge colors:

**Spotlight Award:** Red/Pink tones
**Oral Award:** Purple tones
**Best Paper:** Orange tones
**Poster:** Green tones

These are defined in the CSS under "Award Colors" (lines 24-34 for light mode, 74-84 for dark mode).

## Tips for Choosing a Theme

- **Academic/Research**: Blue, Purple, or Monochrome
- **Creative/Design**: Sunset, Pink, or Green
- **Technical/Engineering**: Ocean Blue or Monochrome
- **Interdisciplinary**: Current Default or Nature Green

## Preview Your Changes

Use browser DevTools to preview color changes before committing:
1. Right-click on your page → Inspect
2. Find the `:root` CSS variables
3. Edit values in real-time to preview
4. Copy final values to your CSS file
