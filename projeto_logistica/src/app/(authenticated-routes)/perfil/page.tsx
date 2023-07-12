'use client'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io"
import { useState } from 'react'

export default function Perfil(){
    const [toggleChange, setToggleChange] = useState(false)

    const switchIconToggle = () => {
        setToggleChange(!toggleChange)
    }

    return(
        <main className="mt-32 h-full w-full px-20">
            <div className="w-full bg-white-simple shadow-md shadow-black-gray-border rounded-md">
                <div className="flex items-stretch">
                    <div className="flex flex-col w-full self-end p-20">
                        <div className='flex'>
                            <IoIosPeople className="fill-green-simple w-12 h-12 mx-2"/>
                            <p className='flex self-center text-3xl font-medium'>Informações do perfil</p>
                        </div>
                        <div className="mt-8">
                            <p className='px-1 font-medium text-sm relative -bottom-3 border border-transparent bg-green-simple rounded-lg left-3 w-fit text-white'>Nome:</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 pt-4 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-md font-medium">Amanda Maria Laureano da Cruz </p>
                        </div>
                        <div className="mt-8">
                            <p className='font-medium text-sm px-1 relative -bottom-3 border border-transparent bg-green-simple rounded-lg left-3 w-fit text-white'>E-mail:</p>
                            <p className="shadow-sm shadow-black-gray-border w-full p-3 pt-4 text-black outline-0 bg-green-simple/10 border rounded-md border-green-simple/80 text-md font-medium">amandacruz@pormade.com.br</p>
                        </div>
                        <div className="shadow-sm shadow-black-gray-border flex mt-12 border rounded-md border-green-simple/80">
                            <p className="w-full p-3 text-black outline-0 bg-green-simple/10 text-md font-medium">Receber notificações por e-mail</p>
                            <button className='bg-green-simple/10' onClick={switchIconToggle}>
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