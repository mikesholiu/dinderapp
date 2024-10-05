import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dinder",
  description: 'Decide where to eat',
  manifest: '/manifest.json',
  themeColor: '#3367D6',
  viewport: 'width=device-width, initial-scale=1',
  icons: [
    { rel: 'icon', url: '/icon.png' },
    { rel: 'apple-touch-icon', url: '/icon.png' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}