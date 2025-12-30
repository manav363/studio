
# SkillBridge

A modern, full-stack platform for bridging the gap between learners and skill development. Built with cutting-edge web technologies to create an engaging, interactive learning experience.

## Overview

SkillBridge is a comprehensive learning platform that connects students and professionals with high-quality educational content, interactive challenges, and expert guidance. Designed for quick iteration and scalable deployment, this project serves as the unified workspace for multiple production deployments.

## Tech Stack

- **Framework:** Next.js (App Router, `src/app` structure)
- **Language:** TypeScript (98% of codebase)
- **Styling:** Tailwind CSS + PostCSS
- **Deployment:** Cloud Hosting & CDN
- **Build Tools:** Node.js with npm

## Key Features

- 🎓 Interactive learning modules with real-time feedback
- 🏆 Gamified skill progression and achievements
- 💡 Comprehensive course library with expert instructors
- 🔄 Multi-deployment architecture supporting multiple specialized platforms:
  - **Studio** - Main learning platform
  - **Market** - Freelance skill marketplace
  - **Freelancer Market** - Freelancer-specific features
- 📱 Responsive design for all devices
- ⚡ Fast, optimized frontend performance

## Project Structure

```
.
├── src/
│   └── app/              # Next.js application with routes
│       └── page.tsx      # Main entry point
├── docs/                 # Documentation
├── .idx/                 # Development environment config
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
- **`apphosting.yaml`** - Cloud Hosting configuration└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Cloud Hosting CLI (for deployment)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manav363/SkillBridge.git
   cd SkillBridge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Create optimized production build
- **`npm start`** - Run production build locally
- **`npm run lint`** - Run ESLint for code quality checks
- **`npm run type-check`** - Validate TypeScript types

## Deployment

SkillBridge is configured for cloud-based deployment with multiple production environments:
### Production Deployments

- **Production - Studio** - Main platform deployment
- **Production - Market** - Marketplace features
- **Production - Freelancer Market** - Freelancer-specific deployment

### Deployment Steps

1. Ensure all changes are committed:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. Push to main branch:
   ```bash
   git push origin main
   ```

3. Automatic deployment will be triggered based on the `apphosting.yaml` configuration.
## Configuration Files

- **`apphosting.yaml`** - Cloud Hosting configuration
- **`tailwind.config.ts`** - Tailwind CSS customization
- **`next.config.ts`** - Next.js build and runtime options
- **`tsconfig.json`** - TypeScript compiler options
- **`components.json`** - UI component configuration

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Commit with clear messages
5. Push and create a Pull Request
6. Merge after review
7. Automatic deployment to Cloud Hosting

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend services and hosting
- **PostCSS** - CSS transformation tool

## Contributing

Contributions are welcome! Please follow the development workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Quality

This project maintains high code quality standards:

- 98% TypeScript coverage
- ESLint for code consistency
- Tailwind CSS for uniform styling
- Responsive design principles
- Accessibility compliance

## Performance

- Optimized Core Web Vitals
- Image optimization with Next.js
- Code splitting for faster initial load
- Server-side rendering where beneficial
- Static site generation for content

## License

MIT License - see LICENSE file for details

## Support

For issues, feature requests, or questions:

- Open an issue on GitHub
- Contact the development team
- Check existing documentation in `/docs`

## Roadmap

- [ ] AI-powered learning recommendations
- [ ] Advanced analytics dashboard
- [ ] Community forum features
- [ ] Mobile app expansion
- [ ] API marketplace integration
- [ ] Real-time collaboration tools

---

**Built with ❤️ by the SkillBridge Team**
