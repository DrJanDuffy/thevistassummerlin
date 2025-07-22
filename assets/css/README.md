# CSS Architecture - The Vistas Summerlin

This directory contains the organized CSS structure for The Vistas Summerlin real estate website.

## File Structure

```
assets/css/
├── styles.css          # Main entry point - imports all other files
├── main.css            # Global styles and layout
├── components.css      # Navigation, header, footer styles
├── pages.css           # Page-specific styles
├── responsive.css      # Mobile-first responsive design
├── utilities.css       # Helper classes
└── README.md           # This documentation
```

## File Descriptions

### `styles.css`
- **Purpose**: Main entry point that imports all other CSS files
- **Contains**: Google Fonts import and modular CSS imports
- **Usage**: This is the only CSS file that should be linked in HTML files

### `main.css`
- **Purpose**: Global styles and foundational layout
- **Contains**:
  - CSS reset and base styles
  - CSS custom properties (variables)
  - Typography scale
  - Button styles
  - Layout containers
  - Hero sections
  - Accessibility enhancements
  - Print styles

### `components.css`
- **Purpose**: Reusable component styles
- **Contains**:
  - Header component styles
  - Navigation component styles
  - Footer component styles
  - Card components
  - Stat components
  - Form components
  - Badge components

### `pages.css`
- **Purpose**: Page-specific styles
- **Contains**:
  - Market Analysis page styles
  - Communities page styles
  - Search page styles
  - Investment page styles
  - About page styles
  - Page-specific layouts and components

### `responsive.css`
- **Purpose**: Mobile-first responsive design
- **Contains**:
  - Breakpoint definitions
  - Mobile-first media queries
  - Touch device optimizations
  - Landscape orientation styles
  - High DPI display support
  - Dark mode support
  - Reduced motion preferences

### `utilities.css`
- **Purpose**: Helper classes for common styling patterns
- **Contains**:
  - Layout utilities (display, flexbox, grid, position)
  - Spacing utilities (margin, padding)
  - Typography utilities (font size, weight, alignment, color)
  - Background utilities
  - Border utilities
  - Shadow utilities
  - Width and height utilities
  - Overflow utilities
  - Cursor utilities
  - User select utilities
  - Visibility and opacity utilities
  - Transform utilities
  - Transition utilities
  - Real estate specific utilities

## Design Principles

### 1. Mobile-First Approach
- All styles are written for mobile devices first
- Progressive enhancement for larger screens
- Touch-friendly interactions

### 2. Real Estate Aesthetics
- Professional color palette (blues, grays, accent colors)
- Trustworthy and sophisticated design
- Clear hierarchy and readability
- Professional typography (Playfair Display + Lato)

### 3. Performance Optimization
- CSS custom properties for consistent theming
- Efficient selectors and minimal specificity conflicts
- Optimized for fast loading
- Minimal CSS bundle size

### 4. Accessibility Compliance
- WCAG 2.1 AA compliance
- High contrast mode support
- Reduced motion preferences
- Focus management
- Screen reader support
- Keyboard navigation

## CSS Custom Properties

The design system uses CSS custom properties for consistent theming:

### Colors
```css
--primary-blue: #0A2540;
--primary-accent: #3A8DDE;
--secondary-blue: #1E3A8A;
--success-green: #16B286;
--warning-orange: #F59E0B;
--error-red: #EF4444;
```

### Typography
```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Lato', sans-serif;
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;
```

### Spacing
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

## Usage Guidelines

### Adding New Styles
1. **Global styles**: Add to `main.css`
2. **Component styles**: Add to `components.css`
3. **Page-specific styles**: Add to `pages.css`
4. **Responsive styles**: Add to `responsive.css`
5. **Utility classes**: Add to `utilities.css`

### Naming Conventions
- Use kebab-case for class names
- Use BEM methodology for component styles
- Use semantic class names
- Prefix utility classes appropriately

### Best Practices
- Use CSS custom properties for values that might change
- Write mobile-first responsive code
- Include accessibility considerations
- Test across different devices and browsers
- Keep specificity low and consistent

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- CSS imports are processed in order
- Custom properties provide runtime theming
- Utility classes reduce CSS bundle size
- Responsive design uses efficient media queries
- Print styles are separated for better performance

## Maintenance

- Keep files organized and well-commented
- Update this README when adding new features
- Test changes across all supported browsers
- Validate CSS for syntax errors
- Monitor performance impact of changes 