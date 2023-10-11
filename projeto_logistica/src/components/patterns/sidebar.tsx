'use client'
import Image from 'next/image'
import folha from "@assets/folhap.png"
import { IoIosLogOut } from "react-icons/io"
import { BsPersonGear } from "react-icons/bs"
import { PiFileXlsLight } from "react-icons/pi"
import { CiHeadphones } from "react-icons/ci"
import { VscMenu } from "react-icons/vsc"
import { VscHome } from "react-icons/vsc"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {version} from '../../../package.json'

export default function Sidebar(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement | null>(null)

    const [isHomeActive, setIsHomeActive] = useState(false)
    const [isFilesActive, setIsFilesActive] = useState(false)
    const [isHeadphoneActive, setIsHeadphoneActive] = useState(false)
    const [isPeopleActive, setIsPeopleActive] = useState(false)
    const [isDoorActive, setIsDoorActive] = useState(false)

    const showSidebar = () => setSidebarIsOpen(!sidebarIsOpen)
    
    const handleClickIconHome = () => {
        setIsHomeActive(true);
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
        setIsPeopleActive(false);
        setIsDoorActive(false);
    }
    const handleClickIconFiles = () => {
        setIsFilesActive(true);
        setIsHomeActive(false);
        setIsHeadphoneActive(false);
        setIsPeopleActive(false);
        setIsDoorActive(false);
    }
    const handleClickIconHeadphone = () => {
        setIsHeadphoneActive(true);
        setIsHomeActive(false);
        setIsFilesActive(false);
        setIsPeopleActive(false);
        setIsDoorActive(false);
    }

    const handleClickIconPeople = () => {
        setIsPeopleActive(true);
        setIsHomeActive(false);
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
        setIsDoorActive(false);
    }

    const handleClickIconDoor = () => {
        setIsDoorActive(true);
        setIsHomeActive(false);
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
        setIsPeopleActive(false);
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
            <nav className="grid grid-cols-2 w-screen shadow-sm shadow-black-light bg-black h-[60px] border-b-2 border-black-gray-border">
                <div className="flex items-center" onClick={showSidebar}>
                    <VscMenu className='hover:scale-95 cursor-pointer transition-all duration-200 w-10 h-10 fill-white mx-5'/>
                </div>
                <div className='flex items-center'>
                    <Link className='' href='/'>
                        <Image className='hover:scale-95 cursor-pointer transition-all duration-200 h-9 w-11' src={folha} alt="Logo Folha Pormade" quality={100} />
                    </Link>
                </div>
            </nav>
            <div ref={sidebarRef} className={`SidebarNav ${sidebarIsOpen? 'left-0':'left-[-100%]'} top-0 z-10 w-56 duration-500 h-screen shadow-inner bg-black shadow-green-simple fixed`}>
                <div className="SidebarWrap flex flex-col px-5 mt-5 h-full">
                    <div className='flex justify-between mb-7'>
                        <div className='mx-1 hover:scale-95 cursor-pointer'>
                             <VscMenu onClick={showSidebar} className='w-8 h-9 fill-white'/>
                        </div>
                    </div>
                    <Link className="" href='/'>
                        <div onClick={handleClickIconHome} className={`flex cursor-pointer items-stretch p-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isHomeActive ? 'rounded-md shadow-inner shadow-white/20 bg-black-light scale-100':''}`}>
                            <div className="mr-2">
                                <VscHome className={`fill-white hover:scale-95 w-7 h-7`}/>
                            </div>
                            <button className="" onClick={handleClickIconHome}>
                                <p className={`text-white whitespace-pre duration-500 font-medium h-full text-[14px] py-1`}>Tela inicial</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/arquivos'>
                        <div onClick={handleClickIconFiles} className={`flex cursor-pointer items-stretch p-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isFilesActive ? 'rounded-md shadow-inner shadow-white/20 bg-black-light scale-100':''}`}>
                            <div className="mr-2">
                                <PiFileXlsLight className={`hover:scale-95 w-7 h-7 fill-white`}/>
                            </div>
                            <button className="w-fit" onClick={handleClickIconFiles}>
                                <p className={`text-white whitespace-pre duration-500 font-medium h-full text-[14px] py-1`}>Arquivos</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/suporte-user'>
                        <div onClick={handleClickIconHeadphone} className={`flex cursor-pointer items-stretch p-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isHeadphoneActive ? 'rounded-md shadow-inner shadow-white/20 bg-black-light scale-100':''}`}>
                            <div className="mr-2">
                                <CiHeadphones className={`hover:scale-95 w-7 h-7 fill-white`}/>
                            </div>
                            <button className="" onClick={handleClickIconHeadphone}>
                                <p className={`text-white whitespace-pre duration-500 font-medium h-full text-[14px] py-1`}>Suporte</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/perfil'>
                        <div onClick={handleClickIconPeople} className={`flex cursor-pointer items-stretch p-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isPeopleActive ? 'rounded-md shadow-inner shadow-white/20 bg-black-light scale-100':''}`}>
                            <div className="mr-2">
                                <BsPersonGear className={`hover:scale-95 w-7 h-7 fill-white`}/>
                            </div>
                            <button className="" onClick={handleClickIconPeople}>
                                <p className={`text-white whitespace-pre duration-500 font-medium h-full text-[14px] py-1`}>Perfil</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/sair'>
                        <div onClick={handleClickIconDoor} className={`flex cursor-pointer items-stretch p-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isDoorActive ? 'rounded-md shadow-inner shadow-white/20 bg-black-light scale-100':''}`}>
                            <div className="mr-2">
                                <IoIosLogOut className={`hover:scale-95 w-7 h-7  fill-white`}/>
                            </div>
                            <button className="" onClick={handleClickIconDoor}>
                                <p className={`text-white whitespace-pre duration-500 font-medium h-full text-[14px] py-1`}>Sair</p>
                            </button>
                        </div>
                    </Link>
                    <div className='flex justify-center w-full h-full'>
                        <span className='self-end text-green-simple/50 font-medium text-sm mb-12'>Version {version}</span>
                    </div>
                </div>
            </div>
        </>
    )
}