import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond, Great_Vibes, Bodoni_Moda, Anton, Josefin_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: ['400'],
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['300', '400', '600'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Apex Demo Platform | See Your Business Powered by Apex',
  description:
    'Explore 16 interactive demo landing pages built for insurance, law, real estate, and financial professionals. Choose your industry and package to preview.',
  icons: {
    icon: '/apex-logo.png',
    apple: '/apex-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${bodoniModa.variable} ${anton.variable} ${josefinSans.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
