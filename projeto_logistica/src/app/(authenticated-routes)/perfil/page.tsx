'use client'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import Image from 'next/image'
import folha from "@assets/folhinha.png"
import { useState } from 'react'

export default function Perfil(){
    const [toggleChange, setToggleChange] = useState(false)

    const switchIconToggle = () => {
        setToggleChange(!toggleChange)
    }

    return(
        <main className="mt-20 h-full w-full lg:px-12 xl:px-20 2xl:px-56">
            <div className="w-full shadow-lg shadow-black-gray-border rounded-md">
                <div className="grid grid-cols-1 grid-rows-1">
                    <div className="rounded-t-xl h-24 md:h-40 w-full bg-[url('/assets/fundo-pormade.png')] bg-cover"></div>
                        <div className="relative rounded-t-lg -top-2 flex-col w-full px-3 sm:px-5 md:px-12 pb-8 bg-white-simple">
                            <div className='flex justify-center sm:justify-start relative -top-9'>
                                <div className="flex justify-center items-center rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-black shadow-md shadow-black/50">
                                    <Image className='sm:w-18 sm:h-14 md:w-28 md:h-24' src={folha} alt="logo folha" quality={100} />
                                </div>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start mb-5">
                                <p className='text-xl sm:text-2xl font-medium'>Informações do perfil</p>
                            </div>
                            <div className="">
                                <p className='px-1 font-medium text-xs sm:text-sm relative -bottom-3 border border-transparent bg-black rounded-md left-3 w-fit text-white'>Nome</p>
                                <p className="shadow-sm shadow-black-gray-border w-full p-2 pt-3 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-xs sm:text-sm font-medium">Amanda Maria Laureano da Cruz </p>
                            </div>
                            <div className="mt-53">
                                <p className='font-medium text-xs sm:text-sm px-1 relative -bottom-3 border border-transparent bg-black rounded-md left-3 w-fit text-white'>E-mail</p>
                                <p className="shadow-sm shadow-black-gray-border w-full p-2 pt-3 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-xs sm:text-sm font-medium">amandacruz@pormade.com.br</p>
                            </div>
                            <div className="mt-3">
                                <p className='font-medium text-xs sm:text-sm px-1 relative -bottom-3 border border-transparent bg-black rounded-md left-3 w-fit text-white'>Notificações</p>
                                <div className="flex justify-between shadow-sm shadow-black-gray-border w-full px-2 pt-2 pb-1 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80">
                                    <p className="flex text-center text-xs sm:text-sm font-medium mt-1">
                                        Receber notificações por e-mail
                                    </p>
                                    <button className='flex mx-1' onClick={switchIconToggle}>
                                    {toggleChange? (
                                        <BsToggleOn className='flex self-end h-8 w-8 fill-black hover:scale-[110%] transition duration-150'/>
                                    ):(
                                        <BsToggleOff className='flex self-end h-8 w-8 fill-green-simple hover:scale-[110%] transition duration-150'/>
                                    )}
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    )
}