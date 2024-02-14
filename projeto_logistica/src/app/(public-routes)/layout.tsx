import { Montserrat } from 'next/font/google'
import '../globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Sincronizador de transportadoras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <div className='bg-black'>
          {children}
        </div>
      </body>
    </html>
  )
}
