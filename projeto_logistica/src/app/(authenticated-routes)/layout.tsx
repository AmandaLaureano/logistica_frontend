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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={montserrat.className}>
        <div className=''>
          <Navbar/>
        </div>
        <div>
          <Sidebar/>
        </div>
        <div className='pt-12'>
          {children}
        </div>
      </body>                        
    </html>
  )
}
