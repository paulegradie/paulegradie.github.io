# Paul Gradie - Personal Website

[![Deploy Status](https://github.com/paulegradie/paulegradie.github.io/actions/workflows/deploy-website.yml/badge.svg)](https://github.com/paulegradie/paulegradie.github.io/actions/workflows/deploy-website.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-paulgradie.com-blue)](https://paulgradie.com/)

> **Software Engineer, Entrepreneur, and Inventor based in Melbourne, Australia**

This repository contains the source code for my personal website and professional portfolio, built with modern web technologies and deployed automatically via GitHub Pages.

## 🌐 Live Website

**[paulgradie.com](https://paulgradie.com/)**

## 🚀 About

This website serves as my digital presence, showcasing my professional journey, technical expertise, and personal projects. As a PhD-qualified software engineer with experience at companies like Empower Finance, Octopus Deploy, and Zendesk, I've built this platform to share insights on software development, artificial intelligence, and entrepreneurship.

### What You'll Find

- **Professional Portfolio**: Comprehensive overview of my career progression and technical skills
- **Technical Articles**: In-depth posts on software engineering, AI, and industry insights
- **Project Showcase**: Open source contributions and side projects
- **Personal Insights**: Thoughts on technology, productivity, and professional development
- **Music**: Creative pursuits and musical interests

## 🛠 Technology Stack

This website is built with a modern, performant tech stack:

- **Framework**: [Next.js 13](https://nextjs.org/) - React framework with SSG capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX for rich content authoring
- **Deployment**: GitHub Pages with automated CI/CD
- **Performance**: Optimized images, static generation, and modern web standards

### Key Features

- ⚡ **Lightning Fast**: Static site generation for optimal performance
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🌙 **Dark Mode**: Elegant light/dark theme switching
- 📝 **Content Management**: MDX-powered blog with syntax highlighting
- 🔍 **SEO Optimized**: Meta tags, structured data, and performance optimization
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels

## 🏗 Architecture

```
src/
├── components/          # Reusable UI components
├── images/             # Optimized images and assets
├── lib/                # Utility functions and helpers
├── pages/              # Next.js pages and routing
│   ├── articles/       # Blog posts organized by year
│   ├── about.jsx       # Professional background
│   ├── projects.jsx    # Portfolio showcase
│   └── uses.jsx        # Tools and recommendations
└── styles/             # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/paulegradie/paulegradie.github.io.git
cd paulegradie.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

### Build & Deploy

```bash
# Create production build
npm run build

# Export static files
npm run export
```

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Connect

- **Website**: [paulgradie.com](https://paulgradie.com/)
- **GitHub**: [@paulegradie](https://github.com/paulegradie)
- **LinkedIn**: [Paul Gradie, PhD](https://www.linkedin.com/in/paul-gradie-phd-743b8b58/)

---

*Built with ❤️ in Melbourne, Australia*