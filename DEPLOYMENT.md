# Deployment Instructions

## GitHub Pages Setup

Your code has been pushed to: https://github.com/rana9031/ai-smart-search

### Enable GitHub Pages

1. Go to your repository: https://github.com/rana9031/ai-smart-search

2. Click on **Settings** (top right)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   
5. The GitHub Actions workflow will automatically deploy your site

6. Wait 2-3 minutes for the deployment to complete

7. Your site will be live at: **https://rana9031.github.io/ai-smart-search/**

### Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark)
4. Visit: https://rana9031.github.io/ai-smart-search/

## Future Updates

To update your live site:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

The site will automatically redeploy within 2-3 minutes.

## Troubleshooting

### If the site doesn't load:

1. Check the Actions tab for any errors
2. Make sure GitHub Pages is enabled in Settings > Pages
3. Verify the source is set to "GitHub Actions"
4. Wait a few minutes and refresh

### If you see 404 errors:

1. Make sure the base path in `vite.config.js` matches your repo name
2. Current setting: `base: '/ai-smart-search/'`

## Custom Domain (Optional)

To use a custom domain:

1. Go to Settings > Pages
2. Add your custom domain
3. Update DNS records as instructed
4. Update `vite.config.js` to use `base: '/'`

---

🎉 Your AI Smart Search app is now live!
