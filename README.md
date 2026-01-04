# Promptless WP Documentation

Official documentation for Promptless WP - a modern WordPress page builder with AI-powered content generation capabilities.

## 📚 About

This repository contains the documentation website for Promptless WP, built with Docusaurus 2. The documentation covers:

- Installation and setup
- Editor usage and features
- Section types and customization
- AI content generation
- Design system and styling
- WordPress integration
- Administration and troubleshooting

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/promptless-docs.git
cd promptless-docs

# Install dependencies
npm install
# or
yarn install
```

### Local Development

```bash
# Start the development server
npm run start
# or
yarn start
```

This will start a local development server at `http://localhost:3000/promptless-docs/`. Most changes are reflected live without having to restart the server.

### Build

```bash
# Create production build
npm run build
# or
yarn build
```

This generates static content in the `build` directory that can be served by any static hosting service.

## 📖 Documentation Structure

```
docs/
├── getting-started/      # Installation and quick start guides
├── editor-guide/         # Editor interface and workflow
├── section-types/        # All available page sections
├── ai-features/          # AI content generation features
├── design-system/        # Styling and customization
├── wordpress-integration/# WordPress specific features
├── administration/       # Plugin management
└── reference/           # FAQ and technical specs
```

## 🚢 Deployment

### GitHub Pages

The documentation is configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
# or
GIT_USER=<GITHUB_USERNAME> npm run deploy
```

### Static Hosting

After building, upload the contents of the `build` folder to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Any web server

## 🔗 Links

- **Live Documentation**: [https://yourusername.github.io/promptless-docs/](https://yourusername.github.io/promptless-docs/)
- **Main Website**: [http://promptlesswp.com](http://promptlesswp.com)
- **WordPress Plugin**: Available in WordPress repository (coming soon)

## 🤝 Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch (`git checkout -b improve-docs`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add better examples'`)
5. Push to the branch (`git push origin improve-docs`)
6. Open a Pull Request

### Writing Guidelines

- Use clear, concise language
- Include practical examples
- Keep technical jargon to a minimum
- Test all code examples
- Update the table of contents if adding new sections

## 📝 License

This documentation is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

For questions about the documentation:
- Open an issue in this repository
- Contact: support@promptlesswp.com

For questions about Promptless WP plugin:
- Visit: [http://promptlesswp.com](http://promptlesswp.com)
- Email: support@promptlesswp.com

---

Built with [Docusaurus 2](https://docusaurus.io/) 🦖