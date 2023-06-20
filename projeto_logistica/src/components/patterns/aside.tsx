'use client'
import { TfiHeadphoneAlt } from "react-icons/tfi"
import Link from "next/link";
import { IoHome } from "react-icons/io5"
import { VscFileSubmodule} from "react-icons/vsc"
import { LuArrowLeftCircle } from "react-icons/lu"
import { useState } from "react";

export default function Aside(){
    const [asideOpened, setAsideOpened] = useState(true)
    const [isHomeActive, setIsHomeActive] = useState<boolean>(false)
    const [isFilesActive, setIsFilesActive] = useState<boolean>(false)
    const [isHeadphoneActive, setIsHeadphoneActive] = useState<boolean>(false)
   
    const handleClickIconHome = () => {
        setIsHomeActive(true)
        setIsFilesActive(false);
        setIsHeadphoneActive(false);
    }
    const handleClickIconFiles = () => {
        setIsFilesActive(true)
        setIsHomeActive(false)
        setIsHeadphoneActive(false)
    }
    const handleClickIconHeadphone = () => {
        setIsHeadphoneActive(true)
        setIsHomeActive(false);
        setIsFilesActive(false);
    }

    return(
        <aside className={` ${asideOpened ? 'w-72':'w-20'} duration-500 h-full bg-black-light shadow-md shadow-black-light fixed`}>
            <div className="flex flex-col px-5 mt-5">
                <div className="flex pb-8">
                    <LuArrowLeftCircle className="w-7 h-7 stroke-white cursor-pointer" onClick={() => setAsideOpened(!asideOpened)}></LuArrowLeftCircle>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="">
                        <Link className="" href='/'>
                            <IoHome onClick={handleClickIconHome} className={`${isHomeActive ? 'fill-green-simple':'fill-white'} iconClass w-7 h-6`}/>
                        </Link>
                    </div>
                    <Link className="" href='/'>
                        <button className="px-2 h-full" onClick={handleClickIconHome}>
                            <p className={`${isHomeActive ? 'text-green-simple':'text-white'} botaoAside whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full pt-1 xl:text-md tracking-widest`}>Tela inicial</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="" >
                        <Link href='/arquivos'>
                            <VscFileSubmodule onClick={handleClickIconFiles} className={`w-7 h-6 ${isFilesActive ? 'fill-green-simple':'fill-white'}`}/>
                        </Link>
                    </div>
                    <Link href='/arquivos'>
                        <button className="px-2" onClick={handleClickIconFiles}>
                            <p className={`${isFilesActive ? 'text-green-simple':'text-white'} botaoAside whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full xl:text-md tracking-widest`}>Arquivos gerados</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-stretch pb-8">
                    <div className="">
                        <Link href='/suporte'>
                            <TfiHeadphoneAlt onClick={handleClickIconHeadphone} className={`w-7 h-6 ${isHeadphoneActive ? 'fill-green-simple':'fill-white'}`}/>
                        </Link>
                    </div>
                    <Link href='/suporte'>
                        <button className="px-2" onClick={handleClickIconHeadphone}>
                            <p className={`${isHeadphoneActive ? 'text-green-simple':'text-white'} botaoAside whitespace-pre duration-500 ${!asideOpened && 'opacity-0 translate-x-28 overflow-hidden'} font-medium h-full pt-1 xl:text-md tracking-widest`}>Suporte</p>
                        </button>
                    </Link>
                </div>
            </div>
            {/*<div className="flex justify-center w-full items-center h-full">
                <span className='text-sm text-green-simple tracking-widest'>Version {version}</span>
            </div>*/}
        </aside>
    )
}