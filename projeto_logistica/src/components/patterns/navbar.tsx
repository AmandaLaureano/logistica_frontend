import Link from 'next/link'
import Image from 'next/image'
import folha from "@assets/folhap.png"
import SpeedDialNavbar from './speed-dial'

export default function Navbar() {
    return(
        <>
            <div className="grid grid-cols-2 place-content-evenly w-screen shadow-sm shadow-black-light bg-black h-[60px] border-b-2 border-black-gray-border">
                <div className='mx-5'>
                    <SpeedDialNavbar/>
                </div>
                <div className='flex items-center'>
                    <Link className='' href='/'>
                        <Image className='hover:scale-95 cursor-pointer transition-all duration-200 h-9 w-10' src={folha} alt="Logo Folha Pormade" quality={100} />
                    </Link>
                </div>
            </div>
        </>
    )
}