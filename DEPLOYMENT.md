# Deployment Guide for GitHub Pages

## Important: Before You Push

### 1. Update Configuration
Edit `docusaurus.config.js` and replace:
- `YOUR_GITHUB_USERNAME` with your actual GitHub username (in 2 places)
- If your repo name is different than `promptless-docs`, update `projectName`
- If using a custom domain, change `baseUrl` from `/promptless-docs/` to `/`

### 2. GitHub Repository Settings

After pushing your code:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select: **GitHub Actions** (NOT "Deploy from branch")
4. Save the settings

### 3. First Deployment

After pushing to the `main` branch:
1. Go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/promptless-docs/`

### 4. Verify Deployment

The GitHub Actions workflow will:
- Automatically build your site when you push to `main`
- Deploy the built files to GitHub Pages
- No need to commit the `build` folder
- No need to manage a `gh-pages` branch

## Alternative: Manual Deployment

If you prefer manual deployment instead of GitHub Actions:

```bash
# Build the site
npm run build

# Deploy to gh-pages branch
GIT_USER=YOUR_GITHUB_USERNAME npm run deploy
```

Then in GitHub Settings → Pages:
- Source: Deploy from branch
- Branch: gh-pages
- Folder: / (root)

## Troubleshooting

### Site not appearing?
- Check Actions tab for build errors
- Ensure GitHub Pages is enabled in Settings
- Wait 5-10 minutes for first deployment
- Check the URL includes your repo name: `/promptless-docs/`

### 404 errors?
- Verify `baseUrl` in config matches your repo name
- Clear browser cache
- Check that the build completed successfully

### Build failing?
- Check the Actions tab for error messages
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

## Custom Domain

To use a custom domain like `docs.promptlesswp.com`:

1. Update `docusaurus.config.js`:
   - `url: 'https://docs.promptlesswp.com'`
   - `baseUrl: '/'`

2. Add a `CNAME` file in `/static` folder with your domain:
   ```
   docs.promptlesswp.com
   ```

3. Configure DNS with your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`

4. In GitHub Settings → Pages:
   - Add your custom domain
   - Enable "Enforce HTTPS"