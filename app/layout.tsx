import React from "react"
import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Typography choice rationale:
// Outfit - geometric but warm, perfect for premium real estate headlines
// DM Sans - highly readable, distinctive alternative to overused Inter
// This combo signals "intentionally designed" rather than "grabbed a template"
const outfit = Outfit({ subsets: ["latin"], variable: '--font-serif' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Haven Real Estate | Find Your Dream Home',
  description: 'Discover exceptional properties with Haven Real Estate. Browse luxury homes, apartments, and commercial spaces with our powerful search and filtering tools.',
  generator: 'v0.app',
  keywords: ['real estate', 'homes for sale', 'property listings', 'luxury homes', 'apartments'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
