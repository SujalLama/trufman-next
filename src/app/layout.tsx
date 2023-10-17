import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import localFont from 'next/font/local'

const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto/Roboto-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Roboto/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Roboto/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Roboto/Roboto-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-roboto'
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} font-sans font-normal leading-normal text-base text-gray-text`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
