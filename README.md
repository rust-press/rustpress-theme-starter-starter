# RustPress Theme: Starter

A minimal starter theme for custom development for RustPress CMS.

[![CI](https://github.com/rust-press/rustpress-theme-starter-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-press/rustpress-theme-starter-starter/actions/workflows/ci.yml)
[![Release](https://github.com/rust-press/rustpress-theme-starter-starter/actions/workflows/release.yml/badge.svg)](https://github.com/rust-press/rustpress-theme-starter-starter/actions/workflows/release.yml)

## Preview

![Theme Preview](screenshot.png)

## Features

- Clean codebase
- Easy customization
- Basic blog layout
- Simple navigation
- Footer widgets
- Responsive design
- Well documented

## Installation

### From GitHub Releases

1. Download the latest release ZIP from the [Releases](https://github.com/rust-press/rustpress-theme-starter-starter/releases) page
2. Upload via RustPress admin panel under **Appearance > Themes**
3. Click **Activate** to enable the theme

### Manual Installation

```bash
# Clone to your themes directory
cd /path/to/rustpress/themes
git clone https://github.com/rust-press/rustpress-theme-starter-starter.git starter-starter
```

## Theme Structure

```
starter-starter/
├── theme.json          # Theme manifest
├── assets/
│   ├── css/           # Stylesheets
│   └── js/            # JavaScript files
├── templates/
│   ├── home.html      # Homepage template
│   ├── single.html    # Single post template
│   ├── page.html      # Page template
│   ├── archive.html   # Archive template
│   └── partials/      # Reusable components
└── layouts/
    └── base.html      # Base layout
```

## Customization

Customize the theme through the RustPress admin panel under **Appearance > Customize**.

Available options:
- Colors and typography
- Header and footer settings
- Layout options
- Custom CSS

## Requirements

- RustPress 1.0.0 or later

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read the [RustPress Contributing Guide](https://github.com/rust-press/rustpress/blob/main/CONTRIBUTING.md).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Links

- [RustPress Core](https://github.com/rust-press/rustpress)
- [Theme Documentation](https://rustpress.org/docs/themes/starter-starter)
- [Issue Tracker](https://github.com/rust-press/rustpress-theme-starter-starter/issues)
