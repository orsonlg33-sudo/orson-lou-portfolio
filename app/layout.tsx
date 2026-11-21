import { Analytics } from '@vercel/analytics/next'
import { Archivo } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap', axes: ['wdth'] })

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
  themeColor: '#15312A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${archivo.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
