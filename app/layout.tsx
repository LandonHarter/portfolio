import Header from '@components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeContextProvider } from '@context/context'
import PageTransition from '@components/transition'

export const metadata: Metadata = {
  metadataBase: new URL('https://landonharter.me'),
  title: 'Landon Harter | Portfolio',
  description: 'Landon is a 16 year old developer based out of Michigan. He has a passion for building and creating with code.',
  authors: [
    {
      name: "Landon Harter",
      url: 'https://landonharter.me'
    },
  ],
  publisher: 'Landon Harter',
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['Landon Harter', 'Harter', 'Developer'],
  category: 'Portfolio',
  classification: 'Portfolio',
  creator: 'Landon Harter',
  applicationName: 'Landon Harter',
  icons: 'https://landonharter.me/images/logos/logo-light.png',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://landonharter.me',
    title: 'Landon Harter | Portfolio',
    description: 'Landon is a 16 year old developer based out of Michigan. He has a passion for building and creating with code.',
  },
  twitter: {
    creator: '@harter_landon',
    creatorId: 'harter_landon',
    site: 'landonharter.me',
    siteId: 'landonharter.me',
    card: 'summary_large_image',
    title: 'Landon Harter | Portfolio',
    description: 'Landon is a 16 year old developer based out of Michigan. He has a passion for building and creating with code.',
    images: 'https://landonharter.me/images/logos/logo-light.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <PageTransition>
            <div style={{
              width: '100vw',
              minHeight: '100vh',
              backgroundColor: 'var(--bg500)'
            }}>
              <Header />
              {children}
            </div>
          </PageTransition>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
