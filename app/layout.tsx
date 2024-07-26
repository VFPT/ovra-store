import { Poppins } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'OVRA STORE',
  description: 'Ovra Store - The Best Game Coins Store. We are dedicated to providing the best service for buying and selling products online, assisting the buyer at any moment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>          
      <ToastProvider />
      <ModalProvider />
      <Navbar />
      {children}
      <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}
