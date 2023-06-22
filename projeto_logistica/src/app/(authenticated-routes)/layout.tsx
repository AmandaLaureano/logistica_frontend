import Aside from '../../components/patterns/aside'
import Navbar from '../../components/patterns/navbar'
import '../globals.css'
import { Montserrat } from 'next/font/google' 

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600']
})

export const metadata = {
  title: 'Logística',
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className="containerNavbar h-[60px]">
          <Navbar />
        </div>
        <div className='containerAside'>
          <Aside />
        </div>
        <div className="containerChildren my-12 mr-36 ml-72 h-fit">
          {children}
        </div>
      </body>                        
    </html>
  )
}
