import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaffeevollautomat Test 2026 | Die 3 Besten im Vergleich',
  description: 'Kaffeevollautomat Test 2026: Jura, DeLonghi & Philips im direkten Vergleich. Finde das beste Modell für dein Zuhause. Unabhängig & objektiv.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
