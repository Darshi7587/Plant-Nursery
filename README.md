# Paradise Nursery

Paradise Nursery is a responsive React shopping app for browsing and purchasing indoor plants. The app includes a homepage, a curated plant catalog, a Redux-powered cart, and a checkout drawer experience.

## Features

- Landing page with hero section and company story
- Plant catalog with 18 products across 3 categories
- Redux Toolkit cart state with add, remove, and quantity controls
- Reusable navigation bar with a cart badge
- Responsive design tailored for mobile and desktop screens
- GitHub Pages compatible routing fallbacks

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This project is configured for a GitHub Pages repository named `Plant-Nursery`.

1. Build the app:
   ```bash
   npm run build
   ```
2. Push the project to GitHub.
3. Configure GitHub Pages to serve the contents of the `dist` folder.
4. The included `public/404.html` fallback helps redirect client-side routes correctly on GitHub Pages.

## Project Structure

- `src/components` – reusable UI sections and cart UI
- `src/data/plants.js` – product catalog data
- `src/redux` – Redux store and cart reducer
- `public/404.html` – SPA redirect support for GitHub Pages
