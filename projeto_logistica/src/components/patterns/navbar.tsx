import Image from 'next/image'
import folha from "@assets/folha.png"
import { BsFillPersonFill } from "react-icons/bs"
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 w-full shadow-sm shadow-black-light bg-black h-[60px] border-b-2 border-black-gray-border fixed">
            <div className="flex items-center pl-7">
                
            </div>
            <div className="flex flex-row-reverse justify-items-end items-center pr-8">
                <Link className='flex items-stretch' href="/perfil">
                    <p className='buttonGreenHover text-white mx-2 text-[16px]'>Amanda</p>
                    <BsFillPersonFill className='fill-green-simple w-5 h-5'/>
                </Link>
                <div className="">
                    <Image className='w-[30px] h-[25px]' src={folha} alt="logo folha" quality={100} />
                </div>
            </div>
        </nav> 
    )
}