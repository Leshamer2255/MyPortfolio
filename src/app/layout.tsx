import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oleksii Melnichuk | Frontend Developer & System Administrator',
  description: 'Портфоліо Oleksii Melnichuk: сучасні веб-проекти, системне адміністрування, сертифікати, навички, досвід, контакти.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Oleksii Melnichuk | Frontend Developer & System Administrator',
    description: 'Портфоліо Oleksii Melnichuk: сучасні веб-проекти, системне адміністрування, сертифікати, навички, досвід, контакти.',
    url: 'https://your-domain.com',
    siteName: 'Oleksii Melnichuk Portfolio',
    images: [
      {
        url: '/images/ло.png',
        width: 400,
        height: 400,
        alt: 'Oleksii Melnichuk',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
} 