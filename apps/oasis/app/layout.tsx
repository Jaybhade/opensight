import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'OpenSight - Shape how AI represents your brand',
  description: 'See how AI answers questions about your brand. Track visibility across ChatGPT, Claude, Perplexity, and more. Discover citation gaps. Build content that earns mentions.',
  keywords: ['AEO', 'Answer Engine Optimization', 'AI visibility', 'ChatGPT', 'Claude', 'Perplexity', 'brand monitoring'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
