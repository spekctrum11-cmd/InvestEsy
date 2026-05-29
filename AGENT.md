# Agent Instructions

This repository is built using **Next.js** and **Vanilla CSS** for maximum flexibility and control. 

## Design System & Styling Rules

1. **NO TailwindCSS:** Do not use, install, or suggest TailwindCSS for this project.
2. **Vanilla CSS Only:** All styling is managed via pure CSS in `app/globals.css` and potentially CSS Modules for component-specific styles.
3. **Theme Preservation:** A complete premium theme is defined in `globals.css`, including CSS variables for:
   - Primary and secondary colors (Soft Blues, Slates)
   - Background gradients and surfaces (White cards)
   - Typography (Inter or similar sans-serif)
   - Spacing and Border Radii
   - Shadows and transitions
4. **Premium Aesthetics:** When adding new components, always adhere to the premium design language (subtle shadows, glassmorphic touches, rounded corners, clean micro-animations on hover). Do not use plain/generic colors. Use the defined CSS variables.

## Development Workflow
- When creating new UI components, check `globals.css` first for existing utility classes (like `.card`, `.btn-primary`) before writing custom CSS.
- Ensure all pages maintain the sleek "SaaS Web3 Investment" visual identity.
