# Portfolio Template Repository Setup

This guide helps you prepare your portfolio as an open-source template.

## 📋 Repository Preparation Checklist

### 1. Clean Personal Data
- ✅ Created example JSON files (`.example.json`)
- ✅ All personal info replaced with placeholder content
- ✅ Sensitive information removed from commits

### 2. Documentation Files
- ✅ `README.template.md` - Main documentation
- ✅ `SETUP.md` - Detailed setup guide  
- ✅ `DEPLOYMENT.md` - Platform-specific deployment guides
- ✅ `package.template.json` - Template package.json

### 3. Files Created for Template
```
├── public/data/
│   ├── profile.example.json      # Personal info template
│   ├── contact.example.json      # Contact info template  
│   ├── skills.example.json       # Skills template
│   ├── projects.example.json     # Projects template
│   ├── experience.example.json   # Work experience template
│   ├── seo.example.json          # SEO metadata template
│   └── navigation.example.json   # Navigation template
├── README.template.md           # Template README
├── SETUP.md                     # Setup instructions
├── DEPLOYMENT.md                # Deployment guide
└── package.template.json       # Template package.json
```

## 🚀 Next Steps for Publishing

### 1. Create New Repository
```bash
# Create new repository on GitHub
git clone https://github.com/YOUR_USERNAME/portfolio-template.git
cd portfolio-template
```

### 2. Add Template Files
```bash
# Copy template files to main repo
cp README.template.md README.md
cp package.template.json package.json
```

### 3. Add .gitignore (if not exists)
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Production builds
dist/
build/

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Personal data (keep personal files local)
public/data/profile.json
public/data/contact.json
public/data/skills.json
public/data/projects.json
public/data/experience.json
public/data/seo.json
public/data/navigation.json
```

### 4. Add LICENSE
Create `LICENSE` file with MIT license:

```
MIT License

Copyright (c) 2024 Portfolio Template

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 5. Update README for Template
Replace personal README with template version and customize:
- Update your GitHub username in links
- Add a live demo URL
- Include screenshot
- Set proper repository links

### 6. Test Template
```bash
# Test setup process
npm install
cp public/data/profile.example.json public/data/profile.json
# Copy other data files...
npm run dev
```

## 📝 Repository Description

**Title**: Portfolio Template - React + TypeScript + Tailwind CSS

**Description**: 
A modern, responsive portfolio template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and professionals to showcase their work, skills, and experience. Easy to customize with JSON configuration files.

**Topics**: 
portfolio, template, react, typescript, tailwindcss, vite, personal-website, developer-portfolio, resume

## 🎯 Usage Instructions for Forkers

When users fork your template, they should:

1. Clone the repository
2. Copy `.example.json` files to `.json` files
3. Customize their data
4. Deploy to their preferred platform

## ⭐ Promotion Tips

- Share on social media
- Submit to template directories
- Add to GitHub topics
- Write a blog post
- Create a video tutorial

## 🔄 Maintaining the Template

- Update dependencies regularly
- Fix bugs and issues
- Add new features based on feedback
- Keep documentation updated
- Monitor GitHub issues and PRs