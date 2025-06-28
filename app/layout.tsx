// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rasoi AI - Your Personal Indian Recipe Assistant',
  description: 'Discover authentic Indian recipes tailored to your mood, location, and season using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        layout: {
          socialButtonsVariant: 'iconButton',
          termsPageUrl: 'https://clerk.com/terms'
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/rasoi.png" />
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="top-center"/>
        </body>
      </html>
    </ClerkProvider>
  )
}