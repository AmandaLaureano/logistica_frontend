'use client'
import Image from 'next/image'
import folha from "@assets/folha.png"
import logo from "@assets/logo-pormade.png"
import { ImExit } from "react-icons/im"
import { IoIosPeople } from "react-icons/io"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiMenuAltRight, BiMenu } from "react-icons/bi"
import { RiHome4Fill, RiCustomerService2Fill} from "react-icons/ri"
import { useState } from 'react'
import Link from 'next/link'
import {version} from '../../../package.json'

export default function Sidebar(){
    const [sidebar, setsidebar] = useState(false)
    const [isHomeActive, setIsHomeActive] = useState(false)
    const [isFilesActive, setIsFilesActive] = useState(false)
    const [isHeadphoneActive, setIsHeadphoneActive] = useState(false)
    const [isPeopleActive, setIsPeopleActive] = useState(false)
    const [isDoorActive, setIsDoorActive] = useState(false)

    const showSidebar = () => setsidebar(!sidebar)
   
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

    return(
        <>
            <nav className="grid grid-cols-2 w-screen shadow-sm shadow-black-light bg-black h-[80px] border-b-2 border-black-gray-border">
                <div className="flex items-center pl-4 max-h-[80px]">
                    <div className="cursor-pointer bg-black-light hover:scale-95 transition-all duration-200 rounded-full shadow-md shadow-green-simple" onClick={showSidebar}>
                        <BiMenu className='w-6 h-6 fill-white m-2'/>
                    </div>
                    <Image className='min-h-[10px] min-w-[150px] max-h-[50px] max-w-[170px]' src={logo} alt="logo Pormade" quality={100} />
                </div>
            </nav>
            <div className={`SidebarNav ${sidebar? 'left-0':'left-[-100%]'} top-0 z-10 w-56 duration-500 h-screen border-r-[2px] border-green-simple bg-black shadow-lg shadow-black fixed`}>
                <div className="SidebarWrap flex flex-col px-2 mt-5 h-full">
                    <div className='flex justify-between mb-7'>
                        <div>
                            <Image className='w-[50px] h-[40px] mx-2' src={folha} alt="logo folha" quality={100} />  
                        </div>
                        <div className='flex relative -right-7 self-center items-center justify-center h-10 w-10 cursor-pointer border-green-simple border-2 bg-black-light hover:scale-95 transition-all duration-200 rounded-full'>
                            <BiMenuAltRight onClick={showSidebar} className='w-6 h-6 fill-white'/>
                        </div>
                    </div>
                    <Link className="" href='/'>
                        <div onClick={handleClickIconHome} className={`flex cursor-pointer items-stretch py-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isHomeActive ? 'rounded-lg shadow-sm shadow-green-simple bg-black-light scale-100':''}`}>
                            <div className="mr-1">
                                <RiHome4Fill className={`${isHomeActive ? 'fill-green-simple':'fill-white'} mx-2 hover:scale-95 w-6 h-6`}/>
                            </div>
                            <button className="" onClick={handleClickIconHome}>
                                <p className={`${isHomeActive ? 'text-green-simple':'text-white'} whitespace-pre duration-500 font-medium h-full text-sm py-1`}>Tela inicial</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/arquivos'>
                        <div onClick={handleClickIconFiles} className={`flex cursor-pointer items-stretch py-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isFilesActive ? 'rounded-lg shadow-sm shadow-green-simple bg-black-light scale-100':''}`}>
                            <div className="mr-1">
                                <VscFileSubmodule className={`hover:scale-95 w-6 h-6 mx-2 ${isFilesActive ? 'fill-green-simple':'fill-white'}`}/>
                            </div>
                            <button className="w-fit" onClick={handleClickIconFiles}>
                                <p className={`${isFilesActive ? 'text-green-simple':'text-white'} break-normal whitespace-pre duration-500  font-medium text-sm py-1`}>Arquivos</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/suporte-user'>
                        <div onClick={handleClickIconHeadphone} className={`flex cursor-pointer items-stretch py-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isHeadphoneActive ? 'rounded-lg shadow-sm shadow-green-simple bg-black-light scale-100':''}`}>
                            <div className="mr-1">
                                <RiCustomerService2Fill className={`hover:scale-95 w-6 h-6 mx-2 ${isHeadphoneActive ? 'fill-green-simple':'fill-white'}`}/>
                            </div>
                            <button className="" onClick={handleClickIconHeadphone}>
                                <p className={`${isHeadphoneActive ? 'text-green-simple':'text-white'} whitespace-pre duration-500 font-medium h-full text-sm py-1`}>Suporte</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/perfil'>
                        <div onClick={handleClickIconPeople} className={`flex cursor-pointer items-stretch py-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isPeopleActive ? 'rounded-lg shadow-sm shadow-green-simple bg-black-light scale-100':''}`}>
                            <div className="">
                                <IoIosPeople className={`hover:scale-95 w-7 h-7 mx-2 ${isPeopleActive ? 'fill-green-simple':'fill-white'}`}/>
                            </div>
                            <button className="" onClick={handleClickIconPeople}>
                                <p className={`${isPeopleActive ? 'text-green-simple':'text-white'} whitespace-pre duration-500 font-medium h-full text-sm py-1`}>Perfil</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/sair'>
                        <div onClick={handleClickIconDoor} className={`flex cursor-pointer items-stretch py-1 mb-5 h-fit w-full hover:bg-black-light hover:rounded-lg ${isDoorActive ? 'rounded-lg shadow-sm shadow-green-simple bg-black-light scale-100':''}`}>
                            <div className="mr-1">
                                <ImExit className={`hover:scale-95 w-5 h-5 ml-3 mr-2 my-1 ${isDoorActive ? 'fill-green-simple':'fill-white'}`}/>
                            </div>
                            <button className="" onClick={handleClickIconDoor}>
                                <p className={`${isDoorActive ? 'text-green-simple':'text-white'} whitespace-pre py-1 duration-500 font-medium h-full text-sm`}>Sair</p>
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