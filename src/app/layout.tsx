import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
<<<<<<< HEAD:src/app/home/layout.tsx
import 'src/app/globals.css'
=======
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> origin/page-gonzalo:src/app/layout.tsx

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Municipio',
  description: 'Municipalidad de Hogwarts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
