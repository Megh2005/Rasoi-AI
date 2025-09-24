# Contributing to Rasoi AI 🍛

Thank you for your interest in contributing to Rasoi AI! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Deployment](#deployment)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct:

- Be respectful and inclusive to all contributors
- Use welcoming and appropriate language
- Be open to constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control
- **Google Account** - For Gemini API access

### First-time Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Rasoi-AI.git
   cd Rasoi-AI
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Megh2005/Rasoi-AI.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your API keys
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Development Setup

### Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Required: Google Gemini AI API Key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: For development debugging
NODE_ENV=development
```

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API key" in the sidebar
4. Create a new API key
5. Copy the generated API key to your `.env.local` file

## Project Structure

```
Rasoi-AI/
├── app/                    # Next.js App Router pages
│   ├── create/            # Recipe creation page
│   ├── featured/          # Featured recipes page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   └── Footer.tsx        # Footer component
├── lib/                   # Utility functions and configurations
│   ├── gemini.ts         # Google Gemini AI integration
│   ├── prompts.ts        # AI prompts and templates
│   └── utils.ts          # General utility functions
├── public/               # Static assets
├── hooks/                # Custom React hooks
└── middleware.ts         # Next.js middleware
```

## Contributing Guidelines

### Types of Contributions

We welcome the following types of contributions:

1. **Bug Fixes** - Fix issues and improve stability
2. **Feature Enhancements** - Add new functionality
3. **UI/UX Improvements** - Enhance user experience
4. **Documentation** - Improve README, comments, or guides
5. **Performance Optimizations** - Make the app faster
6. **Regional Cuisine Additions** - Add support for new Indian cuisines
7. **Recipe Quality Improvements** - Enhance AI prompts for better recipes

### Before You Start

1. **Check existing issues** - Look for related issues or feature requests
2. **Create an issue** - If none exists, create one to discuss your proposed changes
3. **Get feedback** - Wait for maintainer feedback before starting large changes
4. **Assign yourself** - Comment on the issue to let others know you're working on it

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow our [coding standards](#coding-standards)
   - Write clear, descriptive commit messages
   - Test your changes thoroughly

3. **Keep your branch updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

4. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

## Pull Request Process

### Creating a Pull Request

1. **Fill out the PR template** - Provide clear description of changes
2. **Link related issues** - Use "Fixes #123" or "Closes #123"
3. **Add screenshots** - For UI changes, include before/after screenshots
4. **Update documentation** - Update README.md if needed
5. **Ensure tests pass** - Run linting and build processes

### PR Requirements

- ✅ Clear, descriptive title
- ✅ Detailed description of changes
- ✅ Screenshots for UI changes
- ✅ No merge conflicts
- ✅ Follows coding standards
- ✅ Passes all checks (linting, build)

### Review Process

1. **Automated checks** - All CI checks must pass
2. **Code review** - At least one maintainer review required
3. **Testing** - Changes should be tested in development environment
4. **Approval** - PR will be approved and merged by maintainers

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

### React/Next.js

- Use functional components with hooks
- Follow Next.js App Router conventions
- Use proper file naming (kebab-case for files)
- Implement proper error boundaries

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use Shadcn UI components when possible
- Maintain consistent design patterns

### Code Formatting

- Run `npm run lint` before committing
- Use ESLint configuration provided
- Format code with Prettier
- Keep lines under 100 characters when possible

### Commit Messages

Follow conventional commit format:
```
type(scope): description

feat(recipe): add vegetarian filter option
fix(api): resolve Gemini API rate limiting
docs(readme): update installation instructions
style(ui): improve mobile responsiveness
```

## Testing

### Running Tests

```bash
# Run linting
npm run lint

# Build the project
npm run build

# Start development server
npm run dev
```

### Testing Guidelines

- Test your changes in different browsers
- Verify mobile responsiveness
- Test with different API responses
- Check for accessibility compliance
- Ensure error states work properly

### Manual Testing Checklist

- [ ] Recipe generation works with different inputs
- [ ] UI is responsive on mobile and desktop
- [ ] Error messages display correctly
- [ ] Loading states work properly
- [ ] Navigation functions correctly

## Deployment

### Development Environment

The app runs on `http://localhost:3000` in development mode.

### Production Deployment

The app is designed to deploy on:
- **Vercel** (Recommended)
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

Environment variables must be configured in your deployment platform.

## Community

### Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Discussions** - For general questions and ideas
- **README** - Check troubleshooting section first

### Recognition

Contributors will be acknowledged in:
- GitHub contributor list
- Release notes for significant contributions
- Special mentions for outstanding contributions

### Communication

- Be patient and respectful
- Provide clear, detailed information
- Use English for all communications
- Follow up on your contributions

## Questions?

If you have any questions about contributing, please:

1. Check this guide first
2. Look through existing issues and discussions
3. Create a new issue with the "question" label
4. Reach out to maintainers

---

**Thank you for contributing to Rasoi AI! 🙏**

Every contribution, no matter how small, helps make this project better for everyone. Happy cooking and happy coding! 👨‍🍳👩‍🍳