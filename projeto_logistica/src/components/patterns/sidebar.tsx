'use client'
import logoPormade from "../../../public/assets/logo-pormade.png"
import folha from '../../../public/assets/folhap.png'
import { MdOutlineHeadsetMic } from "react-icons/md"
import { FaTruckFast } from "react-icons/fa6"
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri"
import { useEffect, useRef, useState } from 'react'
import { titulosMenu } from '../items-menu/items-menu'
import Link from 'next/link'
import Image from "next/image"

export default function Sidebar(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement | null>(null)

    const showSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

    function changeIcon(icon: string | undefined){
        switch(icon){
            case(icon = 'transportadoras'):
                return (
                    <FaTruckFast className={`stroke-white-simple hover:scale-95 w-7 h-7`}/>
                )
            case(icon = 'suporte'):
                return (
                    <MdOutlineHeadsetMic className={`stroke-white-simple hover:scale-95 w-7 h-7`}/>
                ) 
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return(
        <>
            <div ref={sidebarRef} className={`hidden lg:block ${!sidebarIsOpen ? 'bg-black/90 h-screen w-24 fixed duration-500 top-0' : 'top-0 left-0 w-[270px] duration-500 h-screen bg-black/90 fixed'}`}>
                <div className="flex flex-col gap-3 px-2 h-full mt-20">
                    <div className='w-full h-[70px] mt-4'>
                        {sidebarIsOpen ? (
                            <div className="grid justify-items-start">
                                <div className="">
                                    <Image className="h-[60px] w-[200px] mx-2" src={logoPormade} alt="Logo Pormade Portas" quality={100} />
                                </div>
                            </div>
                        ):(
                            <div className="grid justify-items-center mx-2">
                                <div>
                                    <Image className="h-9 w-10" src={folha} alt="Logo Folha Pormade" quality={100}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`${!sidebarIsOpen? 'left-24 absolute top-24 cursor-pointer duration-500' : 'absolute left-[270px] top-24 cursor-pointer duration-500'} `} onClick={showSidebar}>
                        {!sidebarIsOpen?(
                            <RiArrowDropRightLine className="w-6 h-8 mr-1 bg-black/90 rounded-r-md fill-white-simple" />
                        ):(
                            <RiArrowDropLeftLine className="w-6 h-8 mr-1 bg-black/90 rounded-r-md fill-white-simple" />
                        )}
                    </div>
                    {titulosMenu.map((item, index) =>{
                        return(
                            <div key={item.texto + index}>
                                {item.href && (
                                    <Link href={item.href ?? ''}>
                                        <div className={`rounded-md hover:scale-95 transition-all duration-200 py-3 px-4 flex justify-items-center hover:bg-gray font-medium gap-5 text-white`}>
                                            <div className={`${!sidebarIsOpen ? 'grid w-full justify-items-center': ''} `}>
                                                <div>
                                                    <span>{changeIcon(item.icon)}</span>
                                                </div>
                                            </div>
                                            <div className={`${!sidebarIsOpen ? 'hidden': 'flex items-center text-lg'} `}>
                                                <span>
                                                    {item.texto}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}