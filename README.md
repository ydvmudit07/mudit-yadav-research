# Forecasting India's Eighth Pay Commission - Research Paper Website

A professional, publication-quality website for showcasing an econometric and machine learning research paper. Built with Next.js 15, Tailwind CSS, and inspired by CFR.org's editorial design aesthetic.

## Features

- **Professional Design**: CFR.org-inspired, minimalist aesthetic with restrained typography
- **Light/Dark Mode**: System-aware theme switching with localStorage persistence
- **Responsive Layout**: Mobile-first design that elegantly adapts to all screen sizes
- **SEO Optimized**: Full semantic HTML, JSON-LD structured data, comprehensive metadata
- **Accessible**: WCAG AA compliant with proper color contrast in both themes
- **Performance**: Optimized for high Lighthouse scores (98+ Performance, 100 SEO & Accessibility)
- **Full Paper Content**: Complete research paper rendered as semantic HTML for indexing and readability

## Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel

```bash
# Push to GitHub and connect to Vercel, or use Vercel CLI
vercel deploy
```

## Customization Guide

### 1. Author Information

Replace these placeholders in the following files:

**`components/AuthorSection.tsx`**
- `{{AUTHOR_BIO}}`: Update with author biography (2-3 paragraphs)
- `{{AUTHOR_PHOTO}}`: Update with author photo path

**`components/Navbar.tsx`**
- Update author name "Mudit Yadav" if needed
- Update social media links (Twitter, LinkedIn, GitHub)

**`components/Footer.tsx`**
- `{{CONTACT_EMAIL}}`: Replace with actual email address
- Update social media links

### 2. Research Paper Content

**`components/Hero.tsx`**
- Update title and subtitle if needed
- Replace `{{ABSTRACT_SUMMARY}}` with paper abstract

**`components/PaperContent.tsx`**
- Replace entire content with your research paper
- Keep the structure with `<h2>` for sections, `<h3>` for subsections
- Use the provided `<table>` element styling for data tables
- Update References and Appendix sections

### 3. PDF File

1. Place your paper PDF at `public/paper.pdf`
2. The download button in Hero section will automatically link to it

### 4. Author Photo

1. Replace `public/author.png` with your author photo
2. Image should be square format (1:1 aspect ratio)
3. Recommended size: 300x300px or larger
4. Supported formats: PNG, JPG, WebP

### 5. Metadata & SEO

**`app/layout.tsx`**
- Update `title` and `description` in metadata object
- Update author name and keywords
- Update OpenGraph and Twitter card metadata

**`lib/seo.ts`**
- Update `siteUrl` in production environment
- Update `author` and `siteName`
- Customize JSON-LD schema for ScholarlyArticle

### 6. Social Links

Update social media links in:
- `components/Navbar.tsx`
- `components/Footer.tsx`

Replace placeholder URLs:
- `https://twitter.com` → your Twitter profile
- `https://linkedin.com` → your LinkedIn profile
- `https://github.com` → your GitHub profile

## Color Scheme

The site uses a CFR.org-inspired color palette:

**Light Mode:**
- Background: `#F5F3EF`
- Foreground: `#1a1a1a`
- Cards: `#FAF8F5`
- Borders: `#D7D3CC`

**Dark Mode:**
- Background: `#171717`
- Foreground: `#E8E8E8`
- Cards: `#202020`
- Borders: `#333333`

Colors are defined in `app/globals.css` and can be customized by changing the CSS custom properties.

## Typography

The site uses two premium fonts:

- **Headings**: Source Serif 4 (serif font for editorial authority)
- **Body**: Inter (clean, modern sans-serif)

Both fonts are self-hosted via Next.js fonts with `display: swap` for optimal performance.

## File Structure

```
app/
├── layout.tsx              # Root layout with metadata, fonts, theme setup
├── page.tsx                # Main page (imports all components)
├── globals.css             # Tailwind config, color system, typography
├── robots.ts               # SEO robots.txt
└── sitemap.ts              # SEO sitemap

components/
├── Navbar.tsx              # Header with theme toggle and social links
├── Hero.tsx                # Title, metadata strip, abstract, download
├── PaperContent.tsx        # Full research paper content
├── AuthorSection.tsx       # About author section with bio and photo
└── Footer.tsx              # Footer with contact and social info

lib/
└── seo.ts                  # SEO utilities and schema generation

public/
├── paper.pdf               # Research paper (add yours here)
└── author.png              # Author photo (add yours here)
```

## Environment Variables

Optional environment variables (create `.env.local`):

```bash
# For custom domain (optional)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Performance Optimization

This site is optimized for maximum performance:

- **Next.js Image**: All images use next/image for optimization
- **Font Optimization**: Self-hosted fonts with display: swap
- **CSS**: Minimal, utility-first Tailwind CSS
- **Code Splitting**: Lazy loading where appropriate
- **No External CDNs**: All assets are self-hosted

Target Lighthouse Scores:
- Performance: 98+
- Accessibility: 100
- SEO: 100
- Best Practices: 100

## Accessibility

The site meets WCAG AA standards:

- Color contrast: 4.5:1 minimum for all text in both themes
- Keyboard navigation: Fully keyboard accessible
- Focus indicators: Clear and visible in both themes
- Semantic HTML: Proper heading hierarchy and landmark elements
- Alt text: All images have descriptive alt text
- ARIA labels: Interactive elements properly labeled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import repository at vercel.com
3. Deploy with zero configuration

### Option 2: Other Providers

The site can be deployed to any provider that supports Next.js:

- Netlify
- AWS Amplify
- Azure App Service
- Railway
- Render

## Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Format code
pnpm format
```

### Technologies Used

- **Framework**: Next.js 15 (App Router)
- **UI Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Next.js fonts (Source Serif 4, Inter)
- **Type Safety**: TypeScript
- **Deployment**: Vercel

## License

This project is provided as-is. Customize and use for your research paper website.

## Support

For issues or questions about the template, please refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Author

Template created for research paper publication. Customize with your content and deploy to share your research with the world.

---

**Ready to get started?**

1. Replace `{{AUTHOR_BIO}}`, `{{AUTHOR_PHOTO}}`, and `{{CONTACT_EMAIL}}` placeholders
2. Update the paper content in `components/PaperContent.tsx`
3. Add your research paper PDF to `public/paper.pdf`
4. Update social media links
5. Deploy to Vercel with `vercel deploy`

Happy publishing!
