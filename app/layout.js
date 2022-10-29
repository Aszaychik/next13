import Link from 'next/link'
import '../styles/globals.css'
export default function RootLayout({ children }) {
  return (
    <html>
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
        <main className="flex">
          {children}
        </main>
      </body>
    </html>
  )
}
