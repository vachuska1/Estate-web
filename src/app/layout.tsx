import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://odhadyvachuska.cz'),
  title: {
    default: 'Ing. Aleš Vachuška | Oceňování nemovitostí & Webdesign',
    template: '%s | odhadyvachuska.cz'
  },
  description: 'Oceňování nemovitostí a profesionální tvorba webových stránek.',
  keywords: [
    'Aleš Vachuška',
    'odhad nemovitostí',
    'webové stránky na míru',
    'osobní prezentace na webu',
    'webdesign',
    'Oceňování nemovitosti',
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Ing. Aleš Vachuška | Odborné odhady nemovitostí',
    description: 'Odhady nemovitostí a moderní webdesign pro vaši prezentaci',
    url: 'https://odhadyvachuska.cz',
    siteName: 'odhadyvachuska.cz',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: 'https://www.odhadyvachuska.cz/AV_logo.png', // OG obrázek (min. 1200x630px)
        width: 600,
        height: 600,
        alt: 'Logo Ing. Aleš Vachuška - Odhady nemovitostí',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ing. Aleš Vachuška | Odhady nemovitostí',
    description: 'Profesionální služby v oblasti oceňování nemovitostí a webového vývoje',
    images: '/images/gen8.webp'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png'
      }
    ]
  },
  verification: {
    google: 'M6cmSoX1GAMm0_TUQ0r5g2-9qHJnEWkkwFBXGmL6uCU'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}