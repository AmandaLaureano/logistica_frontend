import Image from 'next/image'
import logo from "@assets/logo-pormade.png"
import { DropdownMenuNavbar } from '../select-navbar'

export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 w-full shadow-sm shadow-black-light bg-black h-[80px] border-b-2 border-black-gray-border fixed">
            <div className="flex items-center pl-4 max-h-[70px]">
               <Image className='w-[160px] h-[50px]' src={logo} alt="logo folha" quality={100} />
            </div>
            <div className="flex flex-row-reverse max-h-[70px] justify-items-end items-center pr-8">
                <DropdownMenuNavbar/>
                <p className='buttonGreenHover text-white mx-3 mt-2 text-[17px] font-medium'>Amanda</p>
            </div>
        </nav> 
    )
}