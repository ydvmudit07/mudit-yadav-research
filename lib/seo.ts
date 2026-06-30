import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
const siteName = 'Mudit Yadav Research'
const author = 'Mudit Yadav'

export const baseMetadata: Metadata = {
  title: "Forecasting India's Eighth Pay Commission: Econometric Analysis | Mudit Yadav",
  description:
    "An econometric and machine learning analysis of India's Eighth Pay Commission. Research paper exploring forecasting methodologies and policy implications.",
  keywords: [
    'India',
    'Pay Commission',
    'Econometrics',
    'Machine Learning',
    'Research',
    'Forecasting',
    'Labor Economics',
    'Public Policy',
  ],
  authors: [{ name: author }],
  creator: author,
  openGraph: {
    type: 'article',
    url: siteUrl,
    title: "Forecasting India's Eighth Pay Commission",
    description:
      "An econometric and machine learning analysis of India's Eighth Pay Commission.",
    siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Forecasting India's Eighth Pay Commission",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Forecasting India's Eighth Pay Commission",
    description:
      "An econometric and machine learning analysis of India's Eighth Pay Commission.",
    creator: '@mudit_yadav',
    images: [`${siteUrl}/og-image.png`],
  },
}

export function generateScholarlyArticleSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: "Forecasting India's Eighth Pay Commission: An Econometric and Machine Learning Analysis",
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    description:
      "An econometric and machine learning analysis of India's Eighth Pay Commission.",
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Website',
      name: siteName,
      url: siteUrl,
    },
    isAccessibleForFree: true,
  }
}

export const robotsText = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml

User-agent: *
Disallow: /api/
`
