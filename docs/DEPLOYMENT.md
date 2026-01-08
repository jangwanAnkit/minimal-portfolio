# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🚀 Deployment Platforms

### 1. Netlify (Recommended)

#### Automatic Deployment
1. Push your code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

#### Netlify Configuration (Optional)
Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 2. Vercel

#### Automatic Deployment
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects the settings
6. Click "Deploy"

#### Vercel Configuration (Optional)
Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### 3. GitHub Pages

#### Setup with gh-pages
```bash
npm install --save-dev gh-pages
```

Update `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio-template",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-template/',
  build: {
    outDir: 'dist'
  }
})
```

Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

#### Setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Firebase Configuration
Choose the following options:
- Public directory: `dist`
- Configure as a single-page app: Yes
- Set up automatic builds and deploys with GitHub: Yes

#### Deploy
```bash
npm run build
firebase deploy
```

### 5. Surge.sh

#### Quick Deployment
```bash
npm install -g surge
npm run build
surge dist your-portfolio.surge.sh
```

### 6. Cloudflare Pages

#### Setup
1. Push code to GitHub
2. Go to Cloudflare Dashboard
3. Pages > Create a project
4. Connect to Git
5. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

## 🔧 Environment Variables

If you need environment variables, create `.env.production`:

```
VITE_SITE_URL=https://yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📱 Custom Domain Setup

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project settings > Domains
2. Add custom domain
3. Update DNS records

### GitHub Pages
1. In your repository, go to Settings > Pages
2. Add custom domain
3. Update DNS records

## 🔒 HTTPS/SSL

All modern platforms provide free SSL certificates automatically. No additional configuration needed.

## ⚡ Performance Optimization

### Build Optimization
The template is already optimized, but you can:

1. **Image Optimization**
   - Use WebP format for images
   - Compress images before using

2. **Bundle Analysis**
   ```bash
   npm run build
   npm install --save-dev rollup-plugin-visualizer
   ```

3. **Caching**
   - Most platforms handle caching automatically
   - Set appropriate cache headers if needed

### SEO Checklist
- Update `public/data/seo.json` with your information
- Add meta descriptions and keywords
- Ensure all images have alt text
- Test with Google PageSpeed Insights

## 🐛 Troubleshooting

### Common Issues

#### 404 Errors on Refresh
- Ensure your platform handles client-side routing
- Add `_redirects` file for Netlify
- Configure fallback routes in platform settings

#### Build Failures
- Check Node.js version compatibility
- Run `npm install` before build
- Check for TypeScript errors: `npm run lint`

#### Asset Loading Issues
- Ensure image URLs are absolute paths
- Check CORS policies for external images
- Verify file names and extensions

### Debug Steps
1. Check build logs for errors
2. Test locally: `npm run build && npm run preview`
3. Validate JSON files in `public/data/`
4. Check console errors in browser

## 📊 Analytics Integration

### Google Analytics
Add to `public/data/seo.json`:

```json
{
  "googleAnalytics": "G-XXXXXXXXXX"
}
```

### Vercel Analytics
1. Enable in Vercel dashboard
2. No code changes needed

### Netlify Analytics
1. Enable in Netlify dashboard
2. No code changes needed

## 🔄 CI/CD

### GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📞 Support

If you encounter deployment issues:
1. Check platform-specific documentation
2. Verify your build configuration
3. Test locally first
4. Open an issue on GitHub