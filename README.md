# The Vistas Summerlin

A modern, scalable, hyperlocal real estate site for The Vistas Summerlin.

## Folder Structure

- `app/` - Main Next.js app directory (pages, layouts, components)
  - `components/` - Shared React components
    - `ui/` - Atomic UI elements (Button, Accordion, etc.)
  - `communities/` - Individual subcommunity pages
- `public/` - Static assets
  - `subcommunities/` - Hero images for each subcommunity
- `lib/` - Utility functions and shared logic
- `.taskmaster/` - Task Master AI project management files

## Best Practices
- Keep all subcommunity pages and images in sync with the authoritative list.
- Use atomic UI components for consistency and reusability.
- Document new folders and components with a `README.md`.
- Remove unused files and assets regularly.
- Optimize images for web performance.

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
