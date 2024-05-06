import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const monument = localFont({
  src: [{ path: '../../public/fonts/MonumentExtended-Regular.woff2' }],
  variable: '--font-monument',
})

const satoshi = localFont({
  src: [
    { path: '../../public/fonts/Satoshi-Bold.woff2' },
    { path: '../../public/fonts/Satoshi-Medium.woff2' },
    { path: '../../public/fonts/Satoshi-Regular.woff2' },
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'Creon',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${monument.variable} ${satoshi.variable} `}>
      <body>{children}</body>
    </html>
  )
}
