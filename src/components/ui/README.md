# UI Components

This folder contains atomic, reusable UI components for The Vistas Summerlin site. Each component is designed to be:

- **Accessible**: Follows best practices for keyboard and screen reader support.
- **Composable**: Can be used in combination with other components.
- **Consistent**: Follows the design system and theme tokens defined in `globals.css`.

## Components
- `Button.tsx`: Standard button with design system styles.
- `Accordion.tsx`: Expand/collapse content for FAQs and sections.
- `OffCanvasNav.tsx`: Mobile navigation drawer.
- `FAB.tsx`: Floating action button for quick actions.

## Usage
Import components from this folder into your pages or higher-level components as needed:

```tsx
import Button from '../ui/Button';
```

## Contribution
- Add new atomic UI elements here.
- Update this README with new components and usage notes. 