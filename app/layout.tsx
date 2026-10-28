import { Analytics } from '@vercel/analytics/next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' })

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
      <body className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
