import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartProvider, CartDrawer } from '@/components/cart-drawer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Time&Time | Premium Luxury Watches & Electronics',
  description: 'Discover premium luxury watches and electronics at Time&Time. Where time meets luxury.',
  generator: 'v0.app',
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
    <html lang="en" className="bg-[#0A0A0A]">
      <body className="font-sans antialiased bg-[#0A0A0A] text-[#F5F0E8]">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
