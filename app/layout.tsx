import './globals.css'
import type { Metadata } from 'next'

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
        {children}
      </body>
    </html>
  )
}
