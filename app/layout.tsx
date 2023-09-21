import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Shop with checkout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <Navbar/>
        <div className='mt-16'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
