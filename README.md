# Starter Starter Theme

A clean, minimalist blog theme for RustPress focused on readability and simplicity.

## Features

- **Minimal Design**: Clean typography, generous whitespace, distraction-free reading
- **Dark Mode**: Automatic detection + manual toggle
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Lightweight CSS and minimal JavaScript
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation
- **SEO Ready**: Open Graph, meta descriptions, semantic markup

## Installation

1. Copy the `starter-starter` folder to your RustPress `themes/` directory
2. Update your site configuration:
   ```toml
   [site]
   theme = "starter-starter"
   ```
3. Restart your RustPress server

## Theme Structure

```
starter-starter/
├── assets/
│   ├── css/
│   │   └── style.css       # All styles in one file
│   └── js/
│       └── theme.js        # Minimal JavaScript
├── layouts/
│   └── base.html           # Base layout
├── templates/
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── sidebar.html
│   │   └── mobile-menu.html
│   ├── home.html           # Homepage
│   ├── single.html         # Blog posts
│   ├── page.html           # Static pages
│   ├── archive.html        # Category/tag archives
│   ├── search.html         # Search results
│   ├── author.html         # Author page
│   ├── about.html          # About page
│   ├── contact.html        # Contact page
│   ├── categories.html     # Categories listing
│   ├── tags.html           # Tags listing
│   ├── privacy.html        # Privacy policy
│   ├── 404.html            # Not found
│   └── 500.html            # Server error
├── theme.json              # Theme configuration
└── README.md
```

## Available Templates (12 pages)

| Template | Purpose |
|----------|---------|
| `home.html` | Homepage with post list |
| `single.html` | Individual blog posts |
| `page.html` | Static pages |
| `archive.html` | Category/tag/author archives |
| `search.html` | Search results |
| `author.html` | Author profile |
| `about.html` | About page |
| `contact.html` | Contact form |
| `categories.html` | Categories listing |
| `tags.html` | Tags listing |
| `privacy.html` | Privacy policy |
| `404.html` | Not found error |
| `500.html` | Server error |

## Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --color-accent: #0066CC;    /* Links and accents */
  --text-primary: #1A1A1A;    /* Main text */
  --text-secondary: #666666;  /* Secondary text */
  --bg-primary: #FFFFFF;      /* Background */
  --bg-secondary: #F8F9FA;    /* Secondary background */
}
```

### Typography

```css
:root {
  --font-heading: Georgia, 'Times New Roman', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Layout

```css
:root {
  --container-width: 720px;   /* Content width */
  --container-wide: 1100px;   /* Wide content width */
}
```

## Theme Features

### Dark Mode

The theme respects `prefers-color-scheme` and includes a manual toggle. Dark mode preference is saved in localStorage.

### Reading Progress

A subtle progress bar at the top shows how far the reader has scrolled through an article.

### Back to Top

A button appears when scrolling down to quickly return to the top of the page.

### Social Sharing

Single posts include share buttons for Twitter, Facebook, LinkedIn, and copy link.

### Author Box

Posts can display an author bio and social links at the bottom.

## Configuration (theme.json)

```json
{
  "features": {
    "stickyHeader": false,
    "backToTop": true,
    "readingProgress": true,
    "socialShare": true,
    "authorBox": true
  }
}
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Philosophy

This theme follows the principle that good design should be invisible. The focus is on your content, not the design itself. Every element serves a purpose, and nothing is added unnecessarily.

## License

MIT License - use freely for personal and commercial projects.
