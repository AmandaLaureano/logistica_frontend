import Image from 'next/image'
import folha from "@assets/folha.png"
import { IoLogInOutline } from 'react-icons/io5'
import Link from "next/link"

export default function NavbarSuporte() {
    return (
        <nav className="flex w-full shadow-sm shadow-black-light bg-black h-[70px] border-b-2 border-black-gray-border fixed">
            <div className="flex mx-6 items-center w-full">
                <Image className='w-[50px] h-[40px] mr-5' src={folha} alt="logo folha" quality={100} />
                <Link href="/login">
                    <button className='loginButton flex items-stretch justify-center shadow-sm shadow-green-simple bg-black h-7 w-32 rounded-md hover:scale-95 transition-all duration-200'>
                        <div className='flex items-center mx-1'>
                            <span className='text-md text-white-simple font-regular tracking-wide'>Login</span>
                        </div>
                        <div className='flex items-center'>
                            <IoLogInOutline className='stroke-white w-5 h-5'/>
                        </div>
                    </button>
                </Link>   
            </div>
        </nav> 
    )
}