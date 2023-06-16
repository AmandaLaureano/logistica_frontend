import { BsBell } from 'react-icons/bs'
import Image from 'next/image'
import folha from "@assets/folha.png"
import  {DropdownPerfil } from '@components/selects'

export default function Navbar(props: any) {
    return (
        <nav className="grid grid-cols-2 fixed w-full bg-black h-[60px] xl:h-[70px] 2xl:h-[90px] border-b-2 border-black-gray-border">
            <div className="flex items-center">
                <div className="grid justify-items-start w-[150px]">
                    <Image className='ml-5 w-[40px] h-[30px] xl:w-[50px] xl:h-[40px]' src={folha} alt="logo folha" quality={100} />
                </div>
                
            </div>
            <div className="flex flex-row-reverse gap-5 justify-items-end items-center pr-10">
            </div>
        </nav>
    )
}