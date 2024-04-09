import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Figma para Devs | Mentoria ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <div className="mx-auto min-h-screen bg-gray-11 px-6 pt-5 ">
          {children}
        </div>
      </body>
    </html>
  )
}
