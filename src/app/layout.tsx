import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/globals/styles.scss';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  "title": "Snailbites - the digital home of Vincent Nalupta",
  "description": "Snailbites is the digital home of Vincent Nalupta, a UX Engineer in NYC.",
  "icons": {
    "icon": '/crown.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
