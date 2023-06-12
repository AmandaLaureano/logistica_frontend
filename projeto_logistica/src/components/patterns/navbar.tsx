import { BsBell } from 'react-icons/bs'
import Image from 'next/image'
import folha from "@assets/folha.png"
import  {DropdownPerfil } from '@components/selects'

export default function Navbar(props: any) {
    return (
        <nav className="grid grid-cols-2 fixed w-full bg-black h-[90px] border-b-2 border-black-gray-border">
            <div className="flex items-center">
                <div className="grid justify-items-center w-[150px]">
                    <Image src={folha} width={60} height={60} alt="logo folha" quality={100} />
                </div>
                <div className='w-full'>
                    <h1 className="text-white text-xl font-medium">Bem-vindo de volta, John!</h1>
                </div>
            </div>
            <div className="flex flex-row-reverse gap-5 justify-items-end items-center pr-10">
                <DropdownPerfil />
                <div>
                    <h1 className='text-white text-xl'>John Doe</h1>
                </div>
                <div className='grid justify-items-center items-center bg-black-light rounded-full w-12 h-12'>
                    <Image src={folha} width={30} height={30} alt="logo folha" quality={100} />
                </div>
                <div className='rotate-90 flex flex-row-reverse'>
                    <hr className='bg-white w-10 border-white border-[1]' />
                </div>
                <div className='pt-2'>
                    <button>
                        <BsBell className='flex self-end w-10 h-8 fill-white'></BsBell>
                    </button>
                </div>
            </div>
        </nav>
    )
}