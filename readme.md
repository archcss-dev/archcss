<p align="center">
  <a href="https://archcss.com/">
    <img src="https://get.archcss.com/brand/banner/banner.webp" alt="Architect CSS logo" height="320" width="640">
  </a>
</p>

<h2 align="center">Architect CSS</h2>

<p align="center">
  <b>Utility-first CSS framework for building fast, flexible, and modern UIs directly in your HTML.</b>
  <br>
  <a href="https://archcss.com"><strong>Explore Documentation »</strong></a>
  <br>
  <a href="https://github.com/archcss-dev/archcss/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/archcss-dev/archcss/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/archcss"><img src="https://img.shields.io/npm/v/archcss.svg?style=flat-square" alt="npm version"></a>
  <a href="https://github.com/archcss-dev/archcss/blob/main/license"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License"></a>
  <a href="https://cdn.jsdelivr.net/npm/archcss"><img src="https://data.jsdelivr.com/v1/package/npm/archcss/badge" alt="jsdelivr"></a>
</p>

---

## Features

- **Utility-first architecture**: Compose any layout and design directly in your HTML without custom CSS.
- **Mobile-first responsive design**: Clean breakpoint variants (sm:, md:, lg:, xl:, xxl:).
- **State variants**: Built-in hover:, focus:, and active: pseudo-variants for colors, borders, and shadows.
- **Modern CSS Grid & Flexbox**: Complete flexbox controls, equal-width columns (grid-cols-*), and responsive auto-fit/fill scales (grid-fill-*, grid-fit-*).
- **Rich color & gradient palette**: Extensive theme colors, bidirectional tints/shades, alpha opacity utilities, directional gradients, and 3-color linear gradients.
- **TypeScript DOM Plugin**: Fast, lightweight helper methods for modals, triggers, smooth scrolling, and clipboard copying.
- **Bundled Icon Fonts**: Local Lucide Icons and FontAwesome webfonts included out of the box.

---

## What's Included

```text
archcss/
├── ui/
│   └── style.css             # Main stylesheet (CDN entrypoint)
├── css/
│   ├── arch.css              # Full compiled CSS framework
│   └── attribution.css       # Standalone origin watermark
├── js/
│   └── plugin.js             # Compiled TypeScript DOM plugin
├── webfonts/
│   ├── fontawesome/          # FontAwesome CSS, min.css, and webfonts
│   ├── googleapis/           # Google Fonts CSS and min.css
│   └── lucide/               # Lucide icon fonts, CSS, min.css, and JS
├── index.js                  # Package entrypoint
├── package.json
└── changelog
```

---

## Installation

### 1. Package Manager

Install ArchCSS via npm, pnpm, or yarn:

```bash
# npm
npm install archcss

# pnpm
pnpm add archcss

# yarn
yarn add archcss
```

### 2. CDN (jsDelivr)

Link the stylesheet and optional scripts directly in your HTML:

```html
<!-- ArchCSS Core Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/archcss/ui/style.css">

<!-- Optional: Lucide Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/archcss/webfonts/lucide/css/lucide.min.css">

<!-- Optional: ArchCSS DOM Plugin -->
<script src="https://cdn.jsdelivr.net/npm/archcss/js/plugin.js"></script>
```

### 3. Git Clone or Download

```bash
git clone https://github.com/archcss-dev/archcss.git
```

You can also download [the latest release archive](https://github.com/archcss-dev/archcss/releases).

---

## Usage Examples

### 1. HTML with Utility Classes

```html
<div class="flex items-center justify-between p-3 bg-light rounded-5 border-1 border-light">
  <h2 class="font-20 fw-700 text-dark m-0">Architect CSS</h2>
  <button class="bg-primary text-light px-3 py-1 rounded-full hover:bg-primary-200 transition-all">
    Get Started
  </button>
</div>
```

### 2. Responsive Grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-2">
  <div class="p-3 bg-white rounded-5 shadow-sm">Card 1</div>
  <div class="p-3 bg-white rounded-5 shadow-sm">Card 2</div>
  <div class="p-3 bg-white rounded-5 shadow-sm">Card 3</div>
</div>
```

### 3. DOM Plugin

Use the included DOM plugin helpers in your scripts:

```html
<!-- Trigger modal display -->
<button onclick="display('#my-modal')">Open Modal</button>

<!-- Modal element -->
<div id="my-modal" class="hidden fixed inset-0 flex items-center justify-center bg-dark-alpha-50">
  <div class="bg-white p-4 rounded-10 shadow-lg">
    <p class="m-0 text-dark">Hello from ArchCSS!</p>
    <button class="mt-2 px-3 py-1 bg-secondary text-light rounded-5" onclick="hide('#my-modal')">
      Close
    </button>
  </div>
</div>
```

```javascript
// Copy to clipboard helper
strcopy('npm install archcss', () => {
  console.log('Copied to clipboard!');
});

// Smooth scroll to an element with offset
scroll_to('#features', 60);
```

---

## Community & Support

- Read the documentation: [https://archcss.com](https://archcss.com)
- Ask questions and share feedback in [GitHub Discussions](https://github.com/archcss-dev/archcss/discussions)
- Report bugs or request features via [GitHub Issues](https://github.com/archcss-dev/archcss/issues)
- If publishing packages that extend Architect CSS on npm, include the `archcss` keyword for discoverability.

---

## Creator

**Beba Godfried A.**
- GitHub: [@bebagodfried](https://github.com/bebagodfried)
- Website: [https://archcss.com](https://archcss.com)

---

## License

Code released under the [MIT License](https://github.com/archcss-dev/archcss/blob/main/license). Documentation released under [Creative Commons BY 3.0](https://creativecommons.org/licenses/by/3.0/).
