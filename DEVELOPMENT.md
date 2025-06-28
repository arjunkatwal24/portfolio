# Development Guide

This is the development guide for Arjun Katwal's portfolio website.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/arjunkatwal24/portfolio.git arjun-portfolio
cd arjun-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/                    # App Router pages
│   ├── components/             # Reusable components
│   ├── features/               # Feature-specific components
│   │   └── profile/            # Portfolio sections
│   ├── data/                   # Static data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   └── styles/                 # Global styles
├── public/                     # Static assets
└── content/                    # Blog content (MDX)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check

## Customization

To customize this portfolio for your own use:

1. Update personal information in `src/data/user.ts`
2. Replace images in `public/images/`
3. Update social links in `src/features/profile/data/social-links.ts`
4. Modify experiences in `src/features/profile/data/experiences.ts`
5. Update projects in `src/features/profile/data/projects.ts`
6. Edit blog posts in `src/content/blog/`

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Motion
- **Content**: MDX
- **TypeScript**: Full type safety
- **Linting**: ESLint + Prettier

## License

MIT License - feel free to use this code for your own portfolio!
