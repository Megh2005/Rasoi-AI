// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'


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
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#333',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#ECFDF5',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FEF2F2',
                },
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  )
}