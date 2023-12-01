'use client'
import Image from 'next/image'
import folha from "@assets/folhap.png"
import { IoIosLogOut } from "react-icons/io"
import { HiOutlineIdentification } from "react-icons/hi"
import { PiFileXlsLight } from "react-icons/pi"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { VscMenu } from "react-icons/vsc"
import { PiTruck } from "react-icons/pi"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {version} from '../../../package.json'
import { titulosSidebar } from '../items-sidebar/items-sidebar'
import { usePathname } from 'next/navigation'

export default function Sidebar(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement | null>(null)
    const pathname = usePathname()

    const showSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

    function mudaCorItemsSidebar(link: string){
        if(link == '/'){
            return 'bg-gray'
        }else if (pathname.includes(link)){
            return 'shadow-inner shadow-white/50'
        }else {
            return 'bg-gray'
        }
    }

    function trocaIcone(icon: string | undefined){
        switch(icon){
            case(icon = 'transportadoras'):
                return <PiTruck className={`fill-white hover:scale-95 w-6 h-6`}/>;
            case(icon = 'arquivos'):
                return <PiFileXlsLight className={`fill-white hover:scale-95 w-6 h-6`}/>    
            case(icon = 'suporte'):
                return <TfiHeadphoneAlt className={`fill-white hover:scale-95 w-5 h-5`}/>
            case(icon = 'dados'):
                return <HiOutlineIdentification className={`stroke-white stroke-1 hover:scale-95 w-6 h-6`}/>
            case(icon = 'sair'):
                return <IoIosLogOut className={`fill-white hover:scale-95 w-6 h-6`}/>
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if(sidebarRef.current && !sidebarRef.current.contains(event.target as Node)){
                setSidebarIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    return(
        <>
            <nav className="grid grid-cols-2 w-screen shadow-sm shadow-black-light bg-black h-[50px] border-b-2 border-black-gray-border">
                <div className="flex items-center" onClick={showSidebar}>
                    <VscMenu className='hover:scale-95 cursor-pointer transition-all duration-200 w-8 h-8 fill-white mx-5'/>
                </div>
                <div className='flex items-center'>
                    <Link className='' href='/'>
                        <Image className='hover:scale-95 cursor-pointer transition-all duration-200 h-8 w-9' src={folha} alt="Logo Folha Pormade" quality={100} />
                    </Link>
                </div>
            </nav>
            <div ref={sidebarRef} className={`SidebarNav ${sidebarIsOpen? 'left-0':'left-[-100%] md:left-[-120%]'} top-0 z-15 w-[250px] duration-500 h-screen border-r-2 bg-black border-green-simple shadow fixed`}>
                <div className="SidebarWrap flex flex-col gap-3 px-3 mt-5 h-full">
                    <div className='flex justify-between mb-7'>
                        <div className='mx-1 hover:scale-95 cursor-pointer'>
                            <VscMenu onClick={showSidebar} className='w-7 h-7 fill-white'/>
                        </div>
                    </div>
                    {titulosSidebar.map((item, index) =>{
                        return(
                            <div key={item.texto + index}>
                                {item.href && (
                                    <Link href={item.href ?? ''}>
                                        <div className={`rounded-md hover:scale-95 transition-all duration-200 p-5 hover:shadow-inner hover:shadow-white/50 ${mudaCorItemsSidebar(item.href)} font-medium flex justify-between items-center text-white`}>
                                            {item.texto}
                                            <span>{trocaIcone(item.icon)}</span>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                    <div className='flex justify-center w-full h-full'>
                        <span className='self-end text-green-simple font-medium text-sm mb-12'>Version {version}</span>
                    </div>
                </div>
            </div>
        </>
    )
}