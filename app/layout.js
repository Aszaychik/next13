import Link from 'next/link'
import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter()

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <title>ASZAYCHIK NEXTJS 13</title>
      </head>
      <body>
        <header>
          <nav className='flex p-5 gap-5'>
            <Link href="/">Home</Link>
            <Link href="/post">Post</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
