# Minimal Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design with hero section, skills, projects, experience, and contact form.

## Features

- Modern, responsive design
- Built with React 18 and TypeScript
- Styled with Tailwind CSS
- SEO optimization with react-helmet-async
- PostHog analytics integration
- Smooth animations and transitions
- Dark mode ready
- PWA support with manifest.json

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
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── SEO.tsx
│   │   └── Skills.tsx
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

## Customization

### Personal Information

Update the following components with your own information:
- `Hero.tsx` - Your name, title, and bio
- `Skills.tsx` - Your technical skills
- `Projects.tsx` - Your project portfolio
- `Experience.tsx` - Your work experience
- `Contact.tsx` - Your contact information

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Analytics

Configure PostHog analytics by updating the environment variables in `.env`.

## License

MIT License - feel free to use this for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Built with ❤️ using modern web technologies.