# Components

This folder contains shared React components for The Vistas Summerlin site. It includes layout, navigation, theming, and other reusable UI elements.

- `Navbar.tsx`: Main site navigation bar, including subcommunity links and theme toggle.
- `Footer.tsx`: Global footer for all pages.
- `ThemeProvider.tsx`: Provides light/dark mode context and theme switching.
- `ThemeToggle.tsx`: Button to toggle between light and dark mode.
- `RegisterServiceWorker.tsx`: Registers the PWA service worker.
- `ClientLayoutShell.tsx`: Client-side layout wrapper for dynamic imports and code splitting.
- `ui/`: Atomic UI components (see `ui/README.md`).

## Usage
Import components from this folder into your pages or feature components as needed.

## Contribution
- Add new shared components here.
- Keep atomic UI elements in the `ui/` subfolder.
- Update this README with new components and usage notes. 