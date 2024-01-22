import Navbar from '../../components/patterns/navbar'
import Sidebar from '../../components/patterns/sidebar'
import '../globals.css'
import { Montserrat } from 'next/font/google' 

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600']
})

export const metadata = {
  title: 'Sincronizador de transportadoras',
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className='containerNav'>
          <Navbar/>
        </div>
        <div>
          <Sidebar/>
        </div>
        <div>
          {children}
        </div>
      </body>                        
    </html>
  )
}
