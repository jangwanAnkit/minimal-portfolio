# Minimal Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design with hero section, skills, projects, experience, and contact form.

**📖 For detailed content update instructions, see [CONTENT_GUIDE.md](CONTENT_GUIDE.md)**

## Features

- Modern, responsive design
- Built with React 18 and TypeScript
- Styled with Tailwind CSS
- SEO optimization with react-helmet-async
- PostHog analytics integration
- Smooth animations and transitions
- Dark mode ready
- PWA support with manifest.json
- **JSON-based content management** - Easy updates without code changes

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Analytics**: PostHog
- **SEO**: react-helmet-async

## Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jangwanAnkit/minimal-portfolio.git
cd minimal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Copy the example environment file:
```bash
cp .env.example .env
```

Edit the `.env` file and add your PostHog API key:
```env
VITE_PUBLIC_POSTHOG_KEY=your_actual_posthog_api_key_here
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

To get your PostHog API key:
1. Sign up at [PostHog](https://posthog.com/)
2. Create a new project
3. Copy your project's API key from the project settings

## Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Building for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
minimal-portfolio/
 ├── public/
 │   └── data/          # JSON data files (edit these to update content!)
 │       ├── profile.json
 │       ├── skills.json
 │       ├── projects.json
 │       ├── experience.json
 │       ├── contact.json
 │       ├── navigation.json
 │       └── seo.json
 ├── src/
 │   ├── components/  # React components
 │   ├── types/       # TypeScript type definitions
 │   ├── lib/         # Utility functions
 │   ├── App.tsx      # Main app component
 │   ├── main.tsx     # Entry point
 │   └── index.css    # Global styles
 ├── .env.example     # Environment variables template
 ├── index.html       # HTML template
 ├── package.json     # Dependencies
 ├── tailwind.config.js
 ├── tsconfig.json
 └── vite.config.ts   # Vite configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization via JSON Config ⭐

This portfolio is designed to be easily customizable without touching any React code. All content is managed through JSON files in the `public/data/` directory.

**📖 See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for:**
- Complete field-by-field documentation
- Valid values for each field
- Common mistakes to avoid
- Mobile editing tips
- Quick update examples

### Updating Content from GitHub Web UI

**Mobile-Friendly Updates:**
1. Go to your repository on GitHub
2. Navigate to `public/data/` folder
3. Click on any JSON file (e.g., `projects.json`)
4. Tap the edit (pencil) icon
5. Modify the JSON content
6. Commit changes with a descriptive message
7. Cloudflare Pages will auto-deploy your changes

### Data Files Structure

#### `profile.json` - Personal Information
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio text",
  "avatar": "URL to your avatar image",
  "email": "your.email@example.com",
  "location": "City, Country",
  "socials": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "email": "mailto:your.email@example.com"
  }
}
```

#### `skills.json` - Technical Skills
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
Available icons: `Layout`, `Server`, `Database`, `Code2`, `Terminal`, `Settings`

#### `projects.json` - Portfolio Projects
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "https://example.com/image.jpg",
      "technologies": [
        { "name": "React" },
        { "name": "TypeScript" }
      ],
      "liveUrl": "https://project-demo.com",
      "sourceUrl": "https://github.com/username/repo",
      "status": "ongoing"
    }
  ]
}
```
Status options: `ongoing` or `completed`

#### `experience.json` - Work Experience
```json
{
  "experience": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "duration": "Jan 2020 – Dec 2022",
      "location": "City",
      "logo": "https://company-logo.com/logo.png",
      "details": [
        "Key achievement 1",
        "Key achievement 2"
      ]
    }
  ]
}
```

#### `contact.json` - Contact Information
```json
{
  "email": "your.email@example.com",
  "location": "City, Country",
  "availability": "Available for new opportunities"
}
```

#### `navigation.json` - Navigation Items
```json
{
  "items": [
    {
      "label": "About",
      "icon": "User2",
      "href": "#about"
    }
  ]
}
```
Available icons: `User2`, `Code2`, `Briefcase`, `Building`, `Mail`

#### `seo.json` - SEO Metadata
```json
{
  "title": "Your Name - Full Stack Developer",
  "description": "SEO description",
  "image": "https://example.com/og-image.jpg",
  "url": "https://your-portfolio.com",
  "type": "website",
  "keywords": ["keyword1", "keyword2"],
  "author": "Your Name",
  "siteName": "Your Portfolio"
}
```

### Customizing Components

While the JSON approach handles most updates, you may want to customize:

**Styling:**
- Modify `tailwind.config.js` for colors, fonts, and design tokens
- Edit `src/index.css` for global styles

**Component Layout:**
- Edit components in `src/components/` for structural changes
- All components use data from JSON files for content

**Analytics:**
- Configure PostHog analytics by updating environment variables in `.env`

### Adding New Sections

To add a new section:
1. Create corresponding JSON file in `public/data/`
2. Create new React component in `src/components/`
3. Fetch JSON data in component using `useEffect` and `fetch('/data/your-file.json')`
4. Add component to `App.tsx`

## Deployment on Cloudflare Pages

### Automatic Deployments

Cloudflare Pages automatically builds and deploys when you push changes to your repository.

**Setup:**
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Environment variables (optional):
   - `VITE_PUBLIC_POSTHOG_KEY`: Your PostHog API key
   - `VITE_PUBLIC_POSTHOG_HOST`: Your PostHog host

**Updating Content:**
- Edit JSON files in GitHub
- Push changes
- Cloudflare automatically rebuilds and deploys
- No manual deployment needed!

### Deployment Time

- **JSON file changes**: ~2-3 minutes
- **Code changes**: ~2-5 minutes

## Analytics

Configure PostHog analytics by updating the environment variables in `.env` or Cloudflare Pages dashboard.

## License

MIT License - feel free to use this for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Built with ❤️ using modern web technologies.