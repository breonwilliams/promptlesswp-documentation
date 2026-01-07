# Claude Code Context for Promptless WP Documentation

## Project Overview
- **Framework**: Docusaurus 2.4.3 static documentation site
- **Live URL**: https://help.promptlesswp.com
- **Repository**: https://github.com/breonwilliams/promptlesswp-documentation
- **Deployment**: GitHub Pages via GitHub Actions
- **Theme**: Custom dark theme with Promptless branding
- **Search**: Algolia configured but not active (needs API keys)

## Current Configuration
- **URL**: https://help.promptlesswp.com (custom domain via CNAME)
- **Base URL**: `/` (root, not a subdirectory)
- **Theme Mode**: Dark mode only (toggle disabled)
- **Contact Email**: contact@promptlesswp.com (NOT support@promptlesswp.com)
- **Node Version**: 18.x required (DO NOT use Node 20 - causes dependency issues)
- **GitHub Pages Source**: GitHub Actions (NOT "Deploy from branch")

## Deployment Process

### Standard Workflow for Updates:
```bash
# 1. Make your changes
# 2. Test locally
npm run build
npm run serve

# 3. Commit changes
git add -A
git commit -m "Descriptive commit message"

# 4. Push to GitHub
git push origin main

# 5. Trigger deployment (optional - auto-triggers on push)
gh workflow run deploy.yml
```

### CRITICAL - Never Do These:
- ❌ Do not commit the `/build` folder (it's in .gitignore)
- ❌ Do not modify `.github/workflows/deploy.yml` without testing
- ❌ Do not change Node version requirements in package.json
- ❌ Do not add dependencies unless absolutely necessary
- ❌ Do not remove or modify the CNAME file in /static
- ❌ Do not change the GitHub Pages configuration to "Deploy from branch"

## Recent Fixes & Current State

### CSS/Layout Fixes Applied:
1. **Mobile horizontal scroll** - Fixed by removing negative margins on `.row` class
2. **Desktop content alignment** - Added proper padding to compensate for row margins
3. **Pagination spacing** - Added bottom margin to separate from footer
4. **Container padding** - Cleaned up 3 conflicting CSS rules

### Key CSS Classes to Remember:
- `.row` - Has negative margins on desktop, removed on mobile
- `.container.padding-top--md.padding-bottom--lg` - Main content padding
- `.pagination-nav` - Has proper spacing from footer
- `.docMainContainer_gTbr .container` - Compensates for row negative margins

## Testing Checklist

Before pushing any changes, verify:
- [ ] `npm run build` succeeds without errors
- [ ] No horizontal scroll on mobile (< 996px width)
- [ ] Content aligns properly with sidebar on desktop
- [ ] Pagination has spacing from left sidebar and bottom footer
- [ ] Dark theme elements display correctly
- [ ] All internal links work (`npm run serve` and test)

## Common Issues & Solutions

### Build Failures
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Deployment Not Updating
1. Check GitHub Actions tab for errors
2. Verify GitHub Pages is set to "GitHub Actions" source
3. Wait 2-5 minutes for deployment to complete
4. Clear browser cache

### CSS Not Applying
- Check for `!important` conflicts
- Verify class names haven't changed in Docusaurus update
- Clear browser cache and hard refresh

### Horizontal Scroll Issues
- Check for negative margins on containers
- Verify mobile media queries are working
- Test at exactly 996px breakpoint

## Project Structure

```
/
├── docs/                 # All documentation markdown files
│   ├── getting-started/
│   ├── editor-guide/
│   ├── section-types/
│   └── ...
├── src/
│   └── css/
│       └── custom.css   # All custom styling
├── static/
│   ├── CNAME           # Custom domain (help.promptlesswp.com)
│   └── img/            # Images and logos
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── docusaurus.config.js # Main configuration
└── package.json        # Dependencies (keep minimal!)
```

## Dependencies Management

### Current Core Dependencies:
```json
{
  "@docusaurus/core": "2.4.3",
  "@docusaurus/preset-classic": "2.4.3",
  "@mdx-js/react": "^1.6.22",
  "clsx": "^1.2.1",
  "prism-react-renderer": "^1.3.5",
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}
```

### Why These Versions Matter:
- **Docusaurus 2.4.3**: Stable, well-tested with our setup
- **React 17**: Required by this Docusaurus version
- **No search plugin**: Removed due to Node compatibility issues

## Search Implementation Status

### Current State:
- Algolia DocSearch is configured in `docusaurus.config.js`
- Placeholder values need replacement:
  - `appId: 'YOUR_APP_ID'`
  - `apiKey: 'YOUR_SEARCH_API_KEY'`
  - `indexName: 'promptlesswp'`

### To Enable Search:
1. Apply at https://docsearch.algolia.com/apply/
2. Wait for approval (1-2 days)
3. Replace placeholder values with provided credentials
4. No other changes needed

## Future Considerations

### Potential Upgrades:
- **Docusaurus 3.x**: Major version with new features but requires migration
- **Node 20 support**: Would require dependency updates
- **AI-powered search**: Available in newer Algolia versions

### Current Limitations:
- Stuck on Node 18 due to dependency constraints
- No local search option that works reliably
- Manual deployment trigger sometimes needed

## Quick Commands Reference

```bash
# Development
npm start              # Start dev server
npm run build         # Build for production
npm run serve         # Serve production build locally

# Deployment
git push origin main  # Auto-triggers GitHub Actions
gh workflow run deploy.yml  # Manual trigger if needed

# Troubleshooting
npm run clear         # Clear cache
npm run typecheck    # Check TypeScript

# Check deployment status
gh run list --workflow=deploy.yml
```

## Contact for Issues
- **Documentation content**: contact@promptlesswp.com
- **Technical deployment**: Check GitHub Actions logs first
- **Custom domain issues**: Verify CNAME file exists in /static

---
Last updated: January 2025
This file should be updated whenever significant changes are made to the deployment process or configuration.