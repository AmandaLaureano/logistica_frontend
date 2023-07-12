'use client'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
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
                    <div className="rounded-t-xl h-40 w-full bg-[url('/assets/fundo-pormade.png')] bg-cover"></div>
                    <div className="flex relative rounded-t-lg -top-3 flex-col w-full self-end px-12 pb-8 bg-white-simple">
                        <div className='flex items-stretch flex-row relative -top-14'>
                            <div className="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-black shadow-md shadow-black/50">
                                <Image className='w-28 h-24' src={folha} alt="logo folha" quality={100} />
                            </div>
                            <div className="flex items-center ">
                                <p className='text-3xl font-medium mt-10 mx-8'>Informações do perfil</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='px-1 font-medium text-sm relative -bottom-3 border border-transparent bg-black rounded-lg left-3 w-fit text-white'>Nome</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 pt-4 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-md font-medium">Amanda Maria Laureano da Cruz </p>
                        </div>
                        <div className="mt-8">
                            <p className='font-medium text-sm px-1 relative -bottom-3 border border-transparent bg-black rounded-lg left-3 w-fit text-white'>E-mail</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 pt-4 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-md font-medium">amandacruz@pormade.com.br</p>
                        </div>
                        <div className="mt-8">
                            <p className='font-medium text-sm px-1 relative -bottom-3 border border-transparent bg-black rounded-lg left-3 w-fit text-white'>Notificações</p>
                            <div className="flex justify-between shadow-sm shadow-black-gray-border w-full p-3 pt-4 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80">
                                <p className="flex text-center text-md font-medium h-5 mt-1">
                                    Receber notificações por e-mail
                                </p>
                                <button className='flex' onClick={switchIconToggle}>
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