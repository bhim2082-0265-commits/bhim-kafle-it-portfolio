# Bhim Kafle - Enterprise IT Leadership Portfolio

A premium, enterprise-grade personal portfolio and corporate-style leadership website for **Bhim Kafle**, Head of IT (IT HOD) with 6+ years of experience in the IT industry.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** Radix UI + Custom ShadCN-style components
- **Icons:** Lucide React
- **Charts:** Recharts
- **Theme:** next-themes (Dark/Light mode)
- **Deployment:** Vercel-ready, Docker support, CI/CD

## Features

- **Premium Enterprise UI** — Cybersecurity & data center inspired aesthetics
- **Responsive Mobile-First Design** — Optimized for all devices
- **Dark/Light Mode** — Seamless theme switching
- **Smooth Animations** — Framer Motion powered transitions
- **Particle Background** — Interactive network visualization
- **AI Chatbot Assistant** — Virtual assistant for visitor engagement
- **SEO Optimized** — OpenGraph, sitemap, robots.txt, metadata
- **Performance Optimized** — Lazy loading, optimized images
- **Accessibility Compliant** — ARIA labels, semantic HTML
- **Admin Dashboard** — Analytics and portfolio management
- **Security Best Practices** — Security headers, XSS protection

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated intro, CTA buttons, statistics, expertise cards |
| **About** | Professional biography, mission, vision, core values |
| **Experience** | Interactive timeline with detailed responsibilities |
| **Skills** | Categorized skill bars, technology badges, animated charts |
| **Projects** | Enterprise project showcase with filtering |
| **Certifications** | Professional certification layout |
| **Blog** | Insights and articles on enterprise IT |
| **Case Studies** | Real-world IT transformation stories |
| **Contact** | Professional contact form, social links, interactive map |
| **Admin** | Dashboard template for portfolio analytics |

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bhimkafle/bhim-kafle-it-portfolio.git

# Navigate to project directory
cd bhim-kafle-it-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push the code to a GitHub repository
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

### Docker

```bash
# Build the Docker image
docker build -t bhim-kafle-portfolio .

# Run the container
docker run -p 3000:3000 bhim-kafle-portfolio
```

### GitHub Actions

The project includes a CI/CD pipeline that:
1. Runs linting and type checking
2. Builds the application
3. Builds a Docker image (on main branch)

## Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── admin/           # Admin dashboard
│   ├── blog/            # Blog page
│   ├── case-studies/    # Case studies page
│   ├── certifications/  # Certifications page
│   ├── contact/         # Contact page
│   ├── experience/      # Experience page
│   ├── projects/        # Projects page
│   ├── skills/          # Skills page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── robots.ts        # Robots configuration
│   └── sitemap.ts       # Sitemap configuration
├── components/
│   ├── layout/          # Header, Footer, ThemeToggle
│   ├── sections/        # ParticleBackground, Chatbot, AdminDashboard
│   └── ui/              # Button, Card, Badge, Progress, Tabs, etc.
├── data/
│   └── portfolio.ts     # Portfolio data and content
└── lib/
    └── utils.ts         # Utility functions
```

## Author

**Bhim Kafle**
- Head of IT (IT HOD)
- Location: Nepal
- Experience: 6+ Years in IT Industry
- [LinkedIn](https://www.linkedin.com/in/bhimkafle)
- [GitHub](https://github.com/bhimkafle)

## License

This project is proprietary. All rights reserved.
