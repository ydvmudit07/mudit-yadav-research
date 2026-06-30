import type { Metadata, Viewport } from 'next'
import { Raleway } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const raleway = Raleway({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Forecasting India\'s Eighth Pay Commission: Econometric Analysis | Mudit Yadav',
  description: 'An econometric and machine learning analysis of India\'s Eighth Pay Commission. Research paper exploring forecasting methodologies and policy implications.',
  generator: 'v0.app',
  keywords: ['India', 'Pay Commission', 'Econometrics', 'Machine Learning', 'Research'],
  authors: [{ name: 'Mudit Yadav' }],
  openGraph: {
    title: 'Forecasting India\'s Eighth Pay Commission',
    description: 'An econometric and machine learning analysis of India\'s Eighth Pay Commission.',
    type: 'article',
    url: 'https://mudityadavresearch.vercel.app',
    siteName: 'Mudit Yadav Research',
  },
  icons: {    icon: '/image.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F3EF' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const resolvedTheme = theme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : theme;
                  const root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  if (resolvedTheme === 'dark') root.classList.add('dark');
                  if (resolvedTheme === 'light' && theme === 'light') root.classList.add('light');
                } catch (error) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ScholarlyArticle',
              headline: "Forecasting India's Eighth Pay Commission: An Econometric and Machine Learning Analysis",
              author: {
                '@type': 'Person',
                name: 'Mudit Yadav',
              },
              datePublished: '2025-06-12',
              description: 'An econometric and machine learning analysis of India\'s Eighth Pay Commission.',
              inLanguage: 'en-US',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
