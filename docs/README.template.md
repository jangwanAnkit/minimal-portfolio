# Portfolio Template

A modern, responsive portfolio template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and professionals to showcase their work, skills, and experience.

![Portfolio Template Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&h=400)

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern, clean UI with Tailwind CSS
- ⚡ Built with Vite for fast development
- 🔧 TypeScript for type safety
- 📊 Structured data management via JSON files
- 🎯 SEO optimized with meta tags
- 🌙 Dark/Light mode support
- 📝 Easy customization without touching code
- 🚀 Ready for deployment to any platform

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Deployment**: Netlify, Vercel, GitHub Pages ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Git

### Installation

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-template.git
   cd portfolio-template
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Your Data**
   ```bash
   # Copy example data files
   cp public/data/profile.example.json public/data/profile.json
   cp public/data/contact.example.json public/data/contact.json
   cp public/data/skills.example.json public/data/skills.json
   cp public/data/projects.example.json public/data/projects.json
   cp public/data/experience.example.json public/data/experience.json
   cp public/data/seo.example.json public/data/seo.json
   cp public/data/navigation.example.json public/data/navigation.json
   ```

4. **Customize Your Portfolio**
   
   Edit the JSON files in `public/data/` with your information:
   
   - `profile.json` - Your basic info, bio, social links
   - `skills.json` - Your technical skills by category
   - `projects.json` - Your portfolio projects
   - `experience.json` - Your work experience
   - `contact.json` - Contact information
   - `seo.json` - SEO metadata
   - `navigation.json` - Navigation menu items

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to see your portfolio.

## 📁 Project Structure

```
portfolio-template/
├── public/
│   └── data/           # JSON data files
│       ├── profile.json
│       ├── skills.json
│       ├── projects.json
│       ├── experience.json
│       ├── contact.json
│       ├── seo.json
│       └── navigation.json
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utilities and data fetching
│   ├── types/         # TypeScript type definitions
│   └── main.tsx       # App entry point
├── SETUP.md           # Detailed setup guide
└── README.md          # This file
```

## 🎨 Customization Guide

### Adding Your Projects

Edit `public/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Brief description of your project",
      "image": "https://example.com/project-image.jpg",
      "technologies": [
        {"name": "React"},
        {"name": "Node.js"}
      ],
      "liveUrl": "https://your-project-demo.com",
      "sourceUrl": "https://github.com/YOUR_USERNAME/project-repo",
      "status": "completed"
    }
  ]
}
```

### Updating Skills

Edit `public/data/skills.json`:

```json
{
  "categories": [
    {
      "title": "Frontend",
      "icon": "Layout",
      "skills": ["React", "TypeScript", "Tailwind CSS"]
    }
  ]
}
```

### Customizing Experience

Edit `public/data/experience.json`:

```json
{
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "startDate": "2023-01",
      "endDate": null,
      "location": "Remote",
      "details": [
        "Your achievement 1",
        "Your achievement 2"
      ]
    }
  ]
}
```

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Go to Netlify and click "New site from Git"
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Go to Vercel and click "New Project"
3. Import your repository
4. Vercel will auto-detect the settings

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

Deploy:
```bash
npm run build
npm run deploy
```

## 📱 Screenshot

[Add a screenshot of your portfolio here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Support

If you find this template useful, please give it a star ⭐

## 🔗 Links

- [Live Demo](https://your-demo-link.com)
- [Setup Guide](./SETUP.md)
- [Report Issues](https://github.com/YOUR_USERNAME/portfolio-template/issues)

---

Built with ❤️ by the open-source community