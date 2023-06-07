import Aside from '../components/patterns/aside'
import Navbar from '../components/patterns/navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600']
})

export const metadata = {
  title: 'Logística',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className="conteudoTotal grid justify-items-stretch h-full bg-white">
          <div className="containerCabecalho z-30 flex flex-wrap w-full h-[90px]">
            <Navbar />
          </div>
          <div className="containerMenuLateral z-20 flex items-end fixed h-full w-[300px]">
            <Aside />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
