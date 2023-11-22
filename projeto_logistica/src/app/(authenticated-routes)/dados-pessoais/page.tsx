'use client'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { useState } from 'react'

export default function DadosPessoais(){
    const [toggleChange, setToggleChange] = useState(false)

    const switchIconToggle = () => {
        setToggleChange(!toggleChange)
    }

    return(
        <main className="mt-20 h-full w-full lg:px-12 xl:px-20 2xl:px-56">
            <div className="w-full mt-24 bg-white-simple pb-20 pt-12 rounded-md shadow-md shadow-black-gray-border overflow-auto">
                <div className="px-3 xmd:px-6 sm:px-10 md:px-12 lg:px-20">
                    <div className="pb-16">
                        <p className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-medium">Olá, Amanda Maria Laureano da Cruz!</p>
                    </div>
                    <div className="">
                        <h1 className="text-md text-black/60">Nome:</h1>
                        <p className="text-sm sm:text-lg p-2 w-full h-full outline-0 bg-white-simple border-b-[1px] border-gray-line truncate">Amanda Maria Laureano da Cruz</p>
                    </div>
                    <div className="py-7">
                        <h1 className="text-md text-black/60">E-mail:</h1>
                        <p className="text-sm sm:text-lg p-2 w-full h-full outline-0 bg-white-simple border-b-[1px] border-gray-line truncate">amandalaureano4@gmail.com</p>
                    </div>
                    <div className="pb-7 flex">
                        <h1 className="text-md text-black/60">Notificações por e-mail</h1>
                        <div className="flex justify-between">
                            <button className='flex mx-3' onClick={switchIconToggle}>
                                {toggleChange? (
                                    <BsToggleOn className='flex self-end h-7 w-7 fill-black hover:scale-[110%] transition duration-150'/>
                                ):(
                                    <BsToggleOff className='flex self-end h-7 w-7 fill-green-simple hover:scale-[110%] transition duration-150'/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}