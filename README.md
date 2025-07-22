# The Vistas Summerlin

A modern real estate website for The Vistas Summerlin, featuring 28 vibrant subcommunities in Las Vegas. Built with Next.js 14 and the latest web technologies.

## 🏗️ Modern Project Structure

```bash
thevistassummerlin-8/
├── public/                    # Static assets
├── src/                       # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── (routes)/          # Route group for main pages
│   │   │   ├── valuation/     # Home valuation pages
│   │   │   ├── market/        # Market data pages
│   │   │   ├── search/        # Property search
│   │   │   ├── communities/   # Community pages
│   │   │   └── [other routes] # Other route pages
│   │   ├── (marketing)/       # Route group for marketing pages
│   │   │   ├── about/         # About pages
│   │   │   ├── contact/       # Contact pages
│   │   │   └── [other marketing] # Other marketing pages
│   │   ├── (dashboard)/       # Route group for dashboard (future)
│   │   ├── favicon.ico        # Site favicon
│   │   ├── global-error.tsx   # Global error handling
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── home.tsx           # Home component
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   ├── ui/               # UI components
│   │   └── [components]      # Other components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Shared utilities
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Centralized types
│   ├── constants/            # Application constants
│   │   └── site.ts           # Site configuration
│   └── styles/               # Global styles
│       └── globals.css       # Global CSS
├── components.json           # Component configuration
├── eslint.config.mjs         # ESLint configuration
├── gitignore                # Git ignore file
├── middleware.ts            # Next.js middleware
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.ts          # Next.js configuration
├── package-lock.json       # Package lock file
├── package.json            # Package configuration
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

This project uses a comprehensive design system with:

- **Typography**: Source Sans Pro (primary) and Open Sans (secondary)
- **Colors**: Primary navy (#2C3E50), link blue (#007BFF), success green (#28A745)
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI components with consistent styling
- **RealScout Integration**: Customized widgets with design system colors

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

### Environment Variables

Create a `.env.local` file with:

```env
# RealScout Configuration
NEXT_PUBLIC_REALSCOUT_AGENT_ID=225050

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-PW6F30EHD8
```

## 📱 Features

- **Modern Next.js 14**: App Router with route groups
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **RealScout Integration**: Property search and valuation widgets
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Error Handling**: Global error boundaries and error pages
- **Modern Tooling**: ESLint, PostCSS, modern configuration files

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Real Estate**: RealScout API integration
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (recommended)
- **Linting**: ESLint with flat config
- **Formatting**: Prettier (recommended)

## 📄 Route Structure

### Route Groups
- **`(routes)`**: Main application pages (valuation, market, search, etc.)
- **`(marketing)`**: Marketing and informational pages (about, contact, etc.)
- **`(dashboard)`**: Future dashboard functionality

### Key Pages
- **Home** (`/`): Main landing page with sections
- **Communities** (`/communities`): All subcommunities
- **Valuation** (`/valuation`): Home value calculator
- **Market Data** (`/market`): Real estate market insights
- **About** (`/about`): Company information
- **Contact** (`/contact`): Contact form and information

## 🎯 Key Components

### Sections
- `Navigation`: Responsive navigation with mobile menu
- `Hero`: Compelling hero section with CTAs
- `HomeEvaluation`: RealScout home value widget
- `PropertyCategories`: Property type showcase
- `FeaturedCommunities`: Highlighted subcommunities
- `MarketData`: Market statistics and trends
- `BlogPosts`: Latest market insights
- `AboutContent`: Company overview
- `Footer`: Site navigation and contact info

### Widgets
- RealScout Home Value Widget
- RealScout Advanced Search
- RealScout Office Listings

## 🔧 Development

### Code Style

- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Implement responsive design patterns
- Add proper error handling
- Use route groups for organization

### File Naming

- **Components**: PascalCase (e.g., `Navigation.tsx`)
- **Pages**: kebab-case (e.g., `home.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: camelCase (e.g., `index.ts`)
- **Constants**: camelCase (e.g., `site.ts`)

### Import Paths

```typescript
// Use absolute imports with @ alias
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { formatPrice } from '@/lib/utils'
import type { Property } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
```

## 📊 Performance

- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading
- Bundle analysis with `@next/bundle-analyzer`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm start
```

## 🔍 Code Quality

### Linting
- ESLint with flat config
- TypeScript strict mode
- Import sorting and organization

### Type Safety
- Full TypeScript coverage
- Strict type checking
- Centralized type definitions

### Testing (Future)
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright

## 📞 Support

For questions or issues, please contact:
- Email: info@thevistassummerlin.com
- Phone: (702) 555-0123

## 📄 License

This project is proprietary to The Vistas Summerlin.

## 🔄 Migration Notes

This project has been restructured to follow the latest Next.js best practices as of July 2025:

- **Route Groups**: Organized pages into logical groups
- **Type Safety**: Centralized type definitions
- **Constants**: Site configuration and constants
- **Modern Config**: ESLint flat config, TypeScript strict mode
- **Performance**: Optimized imports and bundle splitting
