'use client'
import Image from 'next/image'
import folhinha from "@assets/folhinha.png"
import { BsToggleOff, BsToggleOn, BsFillPersonLinesFill } from "react-icons/bs"
import { useState } from 'react'

export default function Perfil(){
    const [toggleChange, setToggleChange] = useState(false)

    const switchIconToggle = () => {
        setToggleChange(!toggleChange)
    }

    return(
        <main className="mt-32 h-full w-full px-20">
            <div className="w-full bg-white-simple shadow-sm shadow-black-gray-border rounded-md">
                <div className="flex items-stretch">
                    <div className='w-[30%] 2xl:w-[30%]'>
                        <div className="shadow-md shadow-black-gray-border bg-[url('/assets/green-blur.png')] bg-cover p-5 flex h-full justify-center place-items-center rounded-l-md">
                            <Image className=' h-30 w-28 xl:h-38 xl:w-32' src={folhinha} quality={100} alt="logo folha"></Image>
                        </div>
                    </div>
                    <div className="flex flex-col w-full self-end px-10 pb-10">
                        <div className='flex mt-8'>
                            <p className='text-2xl font-medium'>Suas informações</p>
                            <BsFillPersonLinesFill className='w-7 h-7 mx-2'/>
                        </div>
                        <div className="mt-8">
                            <p className='p-1 font-medium relative -bottom-4 border border-transparent bg-white-simple left-3 w-fit'>Nome:</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 text-black outline-0 bg-transparent border rounded-md border-green-simple/80 text-md font-medium">Amanda Maria Laureano da Cruz </p>
                        </div>
                        <div className="mt-8">
                            <p className='font-medium p-1 relative -bottom-4 border border-transparent bg-white-simple left-3 w-fit'>E-mail:</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 text-black outline-0 bg-transparent border rounded-md border-green-simple/80 text-md font-medium">amandacruz@pormade.edu.br</p>
                        </div>
                        <div className="shadow-sm shadow-black-gray-border flex mt-12 border rounded-md border-green-simple/80">
                            <p className="w-full p-3 text-black outline-0 bg-transparent text-md font-medium">Receber notificações por e-mail</p>
                            <button className='' onClick={switchIconToggle}>
                            {toggleChange? (
                                <BsToggleOn className='flex self-end h-8 w-8 m-2 fill-green-simple hover:scale-[110%] transition duration-150'/>
                            ):(
                                <BsToggleOff className='flex self-end h-8 w-8 m-2 fill-green-simple hover:scale-[110%] transition duration-150'/>
                            )}
                        </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}