import { Montserrat } from 'next/font/google'
import '../globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600']
})

export const metadata = {
  title: 'Conversor Logístico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className='bg-black'>
          {children}
        </div>
      </body>
    </html>
  )
}
