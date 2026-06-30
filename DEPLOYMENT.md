# Deployment Guide

## Quick Start

1. **Install & Build**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Test Locally**
   ```bash
   pnpm dev
   ```

3. **Deploy to Vercel**
   - Connect your GitHub repo to Vercel
   - Push changes to deploy automatically
   - Or use the Vercel CLI: `vercel`

## Customization Checklist

Before deploying, update these placeholders:

### 1. Author Information
- **File**: `components/AuthorSection.tsx`
- Replace "Replace this section with your author biography..." with your bio
- Replace author photo at `/public/author.png`

### 2. Contact Email
- **File**: `components/Footer.tsx`
- Replace `contact@example.com` with your actual email

### 3. Paper Content
- **File**: `components/PaperContent.tsx`
- Update all section content with your research paper
- Add your tables, equations, and findings

### 4. Hero Section
- **File**: `components/Hero.tsx`
- Update abstract summary
- Customize subtitle if needed

### 5. Social Links
- **File**: `components/Footer.tsx` and `components/Navbar.tsx`
- Update Twitter, LinkedIn, and GitHub URLs to your profiles

### 6. Metadata & SEO
- **File**: `app/layout.tsx`
- Update the `metadata` object:
  - `title`: Your paper's full title
  - `description`: Research paper abstract
  - `authors`: Your name
  - `openGraph`: Social sharing info

## Environment Variables (Optional)

No required environment variables. Site works out of the box.

## Performance Tips

- Use `next/image` for all images
- Fonts are optimized with `display: swap`
- Lazy loading is enabled for images
- Target Lighthouse: 100 (SEO), 98+ (Performance)

## Lighthouse Checklist

Run `pnpm build && pnpm start`, then measure with PageSpeed Insights or Chrome DevTools Lighthouse:

- [ ] SEO Score: 100
- [ ] Accessibility: 95+
- [ ] Performance: 95+
- [ ] Best Practices: 90+

## Domain Setup

1. Add custom domain in Vercel Settings
2. Update metadata `openGraph.url` to your domain
3. Verify with Google Search Console

## Support

For questions or issues, refer to:
- [Next.js 16 Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
