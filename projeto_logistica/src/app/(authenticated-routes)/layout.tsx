import '../globals.css'
import { Montserrat } from 'next/font/google' 
import Sidebar from '@/src/components/patterns/sidebar'

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
        <div className='containerAside'>
         <Sidebar/>
        </div>
        <div className="containerChildren lg:mx-32">
          {children}
        </div>
      </body>                        
    </html>
  )
}
