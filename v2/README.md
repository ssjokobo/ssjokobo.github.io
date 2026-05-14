# sopon.me

Vanilla HTML / CSS / JS — no frameworks, no build step.
Deploy by uploading all files to your server root (or `gh-pages` branch).

## File Structure

```
sopon.me/
├── index.html          ← Home page (announcements + course cards)
├── keyboard.html       ← MUS254 Jazz Keyboard Skills II
├── piano.html          ← Jazz Piano private lessons
├── history.html        ← MUS357 Jazz History
├── resources.html      ← Tools, JazzJae+, links
├── about.html          ← Bio, education, contact
│
├── css/
│   └── style.css       ← All styles (single file)
│
├── js/
│   └── main.js         ← Shared JS (nav active state, dismiss buttons)
│
└── media/              ← PDFs, images, handouts go here
    └── (your files)
```

## How to update content

**Announcements (home page):**
- Edit `index.html`, find the `<section class="announcements">` block
- Each card has a `data-dismiss="ann-XXX"` — increment the number for new announcements
- Students can dismiss cards (stored in localStorage)

**Scores:**
- Edit the `<table class="score-table">` in the relevant page
- Use `class="score--high"` (teal), `class="score--mid"` (gold), `class="score--low"` (red) on `<td>` elements

**Handouts / files:**
- Upload PDFs to the `media/` folder
- Add an `<div class="item-card">` block in the relevant page

## Fonts (loaded from Google Fonts)
- **Bebas Neue** — display headings
- **DM Mono** — labels, codes, monospace
- **DM Sans** — body text

## Accent colors per section
- Keyboard: `#4ecdc4` (teal)
- Piano: `#c77dff` (purple)
- History: `#ff6b6b` (red)
- Resources: `#e8ff5a` (yellow-green)
- About: `#ff9f5a` (orange)
