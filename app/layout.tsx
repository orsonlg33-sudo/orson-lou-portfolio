import { Analytics } from '@vercel/analytics/next'
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orson Lou | Process Optimisation & Data Science',
  description: 'Orson Alejandro Lou Garza — Industrial Engineering student specialising in process optimisation and data science. Turning operational data into business cases for change.',
  generator: 'v0.app',
  icons: {
    icon: '/portfolio-icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#101e32',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
