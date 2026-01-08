# Portfolio Template - Setup Guide

Follow this guide to customize your portfolio template with your personal information.

## 📋 Quick Setup

### 1. Clone and Install
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-template.git
cd portfolio-template
npm install
```

### 2. Copy Example Data Files
Copy the example data files to create your personal portfolio data:

```bash
cp public/data/profile.example.json public/data/profile.json
cp public/data/contact.example.json public/data/contact.json
cp public/data/skills.example.json public/data/skills.json
cp public/data/projects.example.json public/data/projects.json
cp public/data/experience.example.json public/data/experience.json
cp public/data/seo.example.json public/data/seo.json
cp public/data/navigation.example.json public/data/navigation.json
```

### 3. Customize Your Data

Edit each JSON file with your personal information:

#### `public/data/profile.json`
- Update your name, title, and bio
- Change avatar URL to your GitHub profile picture
- Add your social media links
- Include your contact information

#### `public/data/contact.json`
- Update your email and location
- Change your availability status

#### `public/data/skills.json`
- Customize skill categories to match your expertise
- Add or remove skills as needed
- Adjust category titles and icons

#### `public/data/projects.json`
- Replace example projects with your own
- Update project descriptions and technologies
- Add live URLs and source code links
- Set project status (completed, ongoing)

#### `public/data/experience.json`
- Add your work experience
- Include company details and achievements
- Update dates and locations

#### `public/data/seo.json`
- Customize SEO metadata for better search visibility
- Update title, description, and keywords
- Change author and site name

### 4. Development Server
Start the development server:
```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### 5. Build for Production
Create a production build:
```bash
npm run build
```

The build files will be in the `dist` folder.

## 🎨 Customization Tips

### Profile Picture
Use a 150x150px image for best results. GitHub profile pictures work great:
```
https://avatars.githubusercontent.com/u/YOUR_USERNAME?v=4&auto=format&fit=crop&w=150&h=150
```

### Project Images
Use 800x400px images for project showcases. Unsplash provides great free images:
```
https://images.unsplash.com/photo-...?auto=format&fit=crop&w=800&h=400
```

### Company Logos
Company logos should be small icons (favicon size if available).

### Icons
The template uses Lucide React icons. Available icons can be found at:
https://lucide.dev/icons/

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect the settings

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy with:
```bash
npm run build
npm run deploy
```

## 📝 Important Notes

- Remove any sensitive personal information before committing
- Test all links and ensure they work correctly
- Check responsive design on different screen sizes
- Validate JSON files to prevent syntax errors
- Consider adding a custom domain for professional appearance

## 🔧 Troubleshooting

### JSON Syntax Errors
Use an online JSON validator to check your data files for syntax errors.

### Images Not Loading
Ensure image URLs are accessible and not blocked by CORS policies.

### Build Fails
Run `npm run lint` to check for any linting errors that might prevent builds.

### Local Development Issues
Delete `node_modules` and `package-lock.json`, then run `npm install` again.