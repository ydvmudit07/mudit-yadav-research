# Forecasting India's Eighth Pay Commission

**An Econometric and Machine Learning Analysis**

A professional research paper website showcasing a comprehensive econometric and machine learning framework for forecasting India's Eighth Pay Commission and its impact on household consumption patterns across rural and urban India.

**Live Site:** [mudityadavresearch.vercel.app](https://mudityadavresearch.vercel.app)  
**Repository:** [github.com/ydvmudit07/mudit-yadav-research](https://github.com/ydvmudit07/mudit-yadav-research)  
**Author:** Mudit Yadav

## Features

- **Responsive Design**: Clean, minimalist layout built with Tailwind CSS
- **Light/Dark Mode**: Automatic system-aware theme switching with user preferences saved to localStorage
- **Smooth Scroll Animations**: Navbar collapses gracefully with "Mudit Yadav" → "MY" text morph and icon scaling on scroll
- **Interactive PDF Viewer**: Embedded PDF with maximize/minimize overlay for fullscreen reading
- **Comprehensive Content**: Home page with paper abstract, metadata, and author section with photo
- **Executive Summary**: Dedicated page with complete research overview, methodology, and key findings
- **Mobile Optimized**: Full responsive design for mobile, tablet, and desktop
- **SEO Optimized**: Semantic HTML, JSON-LD structured data, Open Graph metadata
- **Fast & Accessible**: Optimized performance, WCAG AA compliant color contrast in both themes
- **Social Integration**: Direct links to LinkedIn and GitHub profiles

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ydvmudit07/mudit-yadav-research.git
cd mudit-yadav-research

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel (auto-deploys on push), or use CLI
vercel deploy
```

## Project Structure

```
app/
├── layout.tsx                    # Root layout, metadata, theme setup
├── page.tsx                      # Home page
├── globals.css                   # Tailwind CSS, color system, typography
├── robots.ts                     # SEO robots.txt
├── sitemap.ts                    # SEO sitemap
└── executive-summary/
    └── page.tsx                  # Research overview page

components/
├── Navbar.tsx                    # Sticky header with collapsing title and theme toggle
├── Hero.tsx                      # Paper title, abstract, metadata, PDF viewer
├── PaperContent.tsx              # Full research content (sections, findings, methodology)
├── AuthorSection.tsx             # Author bio and photo
├── Footer.tsx                    # Contact info and social links
└── ThemeProvider.tsx             # Light/dark theme context

public/
├── favicon.png                   # Browser tab icon
├── author-image.jpeg             # Author photo
├── Forecasting India's Eighth... # Research paper PDF
└── [other assets]
```

## Customization Guide

### Update Metadata & Title

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title | Your Name',
  description: 'Your research description...',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Title',
    description: 'Your description...',
  },
}
```

### Update Author Information

1. **Navbar** (`components/Navbar.tsx`):
   - Line 23: Change "Mudit Yadav" to your name

2. **Footer** (`components/Footer.tsx`):
   - Line 11: Change "MY" to your initials
   - Line 27: Update email address
   - Line 35: Update LinkedIn URL
   - Line 42: Update GitHub URL

3. **Author Section** (`components/AuthorSection.tsx`):
   - Update biography and research interests
   - Replace author photo path (currently `/author-image.jpeg`)

### Replace Research Content

1. **Home Page** (`components/Hero.tsx`):
   - Update paper title
   - Update subtitle/tagline
   - Replace abstract text
   - Add/replace author metadata (published date, type, etc.)

2. **Executive Summary** (`components/PaperContent.tsx`):
   - Replace complete content with your research overview
   - Keep semantic structure (`<h2>`, `<h3>` for headings)
   - Update sections: Overview, Key Findings, Methodology, Policy Implications, Limitations, Conclusion

### Add Your PDF

1. Place your research paper PDF at `public/paper.pdf` (or rename in `components/Hero.tsx`)
2. The download button and inline viewer will automatically use this file

### Update Images

1. **Favicon** (`public/favicon.png`): Browser tab icon (currently set in `app/layout.tsx`)
2. **Author Photo** (`public/author-image.jpeg`): Used in author section
   - Square format (1:1 aspect ratio)
   - Recommended: 600x600px or larger

### Update Social Links

Update in `components/Navbar.tsx` and `components/Footer.tsx`:
- LinkedIn: `https://linkedin.com/in/ydvmudit07`
- GitHub: `https://github.com/ydvmudit07/mudit-yadav-research`

## Design Features

### Navbar Scroll Animation

The navbar title smoothly collapses on scroll (> 24px):
- **"Mudit Yadav"** fades out with upward translation
- **"MY"** fades in with downward translation
- Icons scale to match the title size
- Smooth 500ms easing animation

### Interactive PDF

- Embedded PDF viewer in Hero section
- "Click here to maximise" link below the PDF
- Full-screen overlay mode with semi-transparent backdrop
- Minimize button within the maximized view
- Fallback message for browsers without PDF support

### Theme System

Default theme: **Light mode**
- User can toggle between light/dark using moon/sun icon in navbar
- Preference saved to localStorage
- System preference respected if no saved preference

Color definitions in `app/globals.css`:
- Light: Warm neutrals (`#F5F3EF`, `#1a1a1a`)
- Dark: Cool dark tones (`#171717`, `#E8E8E8`)

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Fonts**: Raleway (Google Fonts)
- **Type Safety**: TypeScript
- **PDF**: Embedded object element with fallback
- **Deployment**: Vercel

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
