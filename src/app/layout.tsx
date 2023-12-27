import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dipesh Singh | MERN Stack Developer',
  description: 'Dipesh Singh | MERN Stack Developer',
  icons: {
    icon: '/images/laptop.png',
    shortcut: '/images/laptop.png',
    apple: '/images/laptop.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/laptop.png',
    },
  },
  openGraph:{
    locale: 'en_US'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          <div className='pt-[77px]'>
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  )
}
