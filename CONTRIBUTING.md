# Contributing to Minimal Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

When reporting a bug, include:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear and descriptive title
- Provide a detailed explanation of the enhancement
- Explain why this enhancement would be useful

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Ensure code quality**:
   - Follow existing code style
   - Run linting: `npm run lint` or `pnpm run lint`
   - Test your changes thoroughly
5. **Commit your changes** using clear, descriptive messages
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

## Development Setup

```bash
# Clone the repository
git clone https://github.com/jangwanAnkit/minimal-portfolio.git

# Navigate to the project directory
cd minimal-portfolio

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Start development server
npm run dev
```

## Code Style

- Follow the existing code structure and naming conventions
- Use TypeScript for type safety
- Use Tailwind CSS classes for styling
- Keep components small and focused
- Write clean, readable code with appropriate comments

## Project Structure

```
src/
├── components/    # Reusable React components
├── App.tsx       # Main application component
├── main.tsx      # Application entry point
└── index.css     # Global styles
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for any questions about contributing!