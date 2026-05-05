import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DEP Italia — Eredità Digitale | Pianifica e proteggi la tua vita digitale',
  description: 'Per te oggi, per chi ti vuole bene domani. La prima piattaforma italiana per organizzare la tua eredità digitale. Conforme GDPR, dati al sicuro nel tuo browser.',
  keywords: ['eredità digitale', 'digital legacy', 'testamento digitale', 'inventario digitale', 'GDPR', 'fiduciario digitale'],
  openGraph: {
    title: 'DEP Italia — Eredità Digitale',
    description: 'Per te oggi, per chi ti vuole bene domani. Organizza la tua vita digitale in modo sicuro e GDPR-compliant.',
    type: 'website',
    locale: 'it_IT',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
