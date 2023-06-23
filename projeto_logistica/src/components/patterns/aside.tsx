'use client'
import { TfiHeadphoneAlt } from "react-icons/tfi"
import Link from "next/link";
import { IoHome } from "react-icons/io5"
import { VscFileSubmodule} from "react-icons/vsc"
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi"
import { ImExit } from "react-icons/im"
import { useState } from "react";

export default function Aside(){
    const [asideOpened, setAsideOpened] = useState(true)
    const [changeIconArrow, setChangeIconArrow] = useState(false)
    const [isHomeActive, setIsHomeActive] = useState(false)
    const [isFilesActive, setIsFilesActive] = useState(false)
    const [isHeadphoneActive, setIsHeadphoneActive] = useState(false)
    const [isExitActive, setIsExitActive] = useState(false)
   
    const handleClickIconHome = () => {
        setIsHomeActive(true);
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
        setIsExitActive(false);
    }
    const handleClickIconFiles = () => {
        setIsFilesActive(true);
        setIsHomeActive(false);
        setIsHeadphoneActive(false);
        setIsExitActive(false);
    }
    const handleClickIconHeadphone = () => {
        setIsHeadphoneActive(true);
        setIsHomeActive(false);
        setIsFilesActive(false);
        setIsExitActive(false);
    }

    const handleClickIconExit = () => {
        setIsExitActive(true);
        setIsHomeActive(false);
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
    }

    const controlAside = () => {
        setAsideOpened(!asideOpened)
    }

    const changeIconAside = () => {
        setChangeIconArrow(!changeIconArrow)
    }

    return(
        <div className={` ${asideOpened ? 'w-44 xl:w-56':'w-24'}  duration-500 h-screen border-r-[6px] rounded-r-md border-green-simple bg-black shadow-lg shadow-black fixed`}>
            <div className="grid grid-cols-2 pb-10 mx-6 mt-5 w-full">
                {changeIconArrow ? (
                    <div className="flex justify-items-end w-full">
                        <button onClick={changeIconAside} className="buttonCollapseAside ">
                            <BiMenuAltRight className="hover:scale-95 w-8 h-8 fill-green-simple cursor-pointer transition duration-150" onClick={controlAside}></BiMenuAltRight>
                        </button>
                    </div>
                ):(
                    <div className="flex justify-items-end w-full">
                        <button onClick={changeIconAside} className="buttonCollapseAside">
                            <BiMenuAltLeft className="hover:scale-95 w-8 h-8 fill-green-simple cursor-pointer transition duration-150" onClick={controlAside}></BiMenuAltLeft>
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col px-7 mt-5">
                <div className="flex items-stretch pb-8 h-full">
                    <div className="">
                        <Link className="" href='/'>
                            <IoHome onClick={handleClickIconHome} className={`${isHomeActive ? 'fill-green-simple':'fill-white'} iconClass hover:scale-95 w-5 h-5 xl:w-7 xl:h-6`}/>
                        </Link>
                    </div>
                    <Link className="h-fit" href='/'>
                        <button className="px-2" onClick={handleClickIconHome}>
                            <p className={`${isHomeActive ? 'text-green-simple':'text-white'} buttonGreenHover whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full pt-1 text-sm xl:text-base`}>Tela inicial</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="">
                        <Link href='/arquivos'>
                            <VscFileSubmodule onClick={handleClickIconFiles} className={`hover:scale-95 w-5 h-5 xl:w-7 xl:h-6 ${isFilesActive ? 'fill-green-simple':'fill-white'}`}/>
                        </Link>
                    </div>
                    <Link className="" href='/arquivos'>
                        <button className="px-2 w-fit" onClick={handleClickIconFiles}>
                            <p className={`${isFilesActive ? 'text-green-simple':'text-white'} buttonGreenHover break-normal whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium w-fit h-fit pt-1 text-sm xl:text-base`}>Arquivos</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="">
                        <Link href='/suporte'>
                            <TfiHeadphoneAlt onClick={handleClickIconHeadphone} className={`hover:scale-95 w-5 h-5 xl:w-7 xl:h-6 ${isHeadphoneActive ? 'fill-green-simple':'fill-white'}`}/>
                        </Link>
                    </div>
                    <Link href='/suporte'>
                        <button className="px-2" onClick={handleClickIconHeadphone}>
                            <p className={`${isHeadphoneActive ? 'text-green-simple':'text-white'} buttonGreenHover whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full pt-1 text-sm xl:text-base`}>Suporte</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="">
                        <Link href='#'>
                            <ImExit onClick={handleClickIconExit} className={`hover:scale-95 mr-1 xl:mx-1 w-5 h-5 xl:w-6 xl:h-6 ${isExitActive ? 'fill-green-simple':'fill-white'}`}/>
                        </Link>
                    </div>
                    <Link href='#'>
                        <button className="px-1" onClick={handleClickIconExit}>
                            <p className={`${isExitActive ? 'text-green-simple':'text-white'} buttonGreenHover  whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full pt-1 text-sm xl:text-base`}>Sair</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}