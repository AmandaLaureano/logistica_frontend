'use client'
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { LuHeadphones } from "react-icons/lu"
import { LuClipboardList } from "react-icons/lu"
import { motion } from "framer-motion"
import Tooltip from '@mui/material/Tooltip'

export default function SpeedDialNavbar(){
    const [speedIsOpened, setSpeedIsOpened] = useState(false)
    const speedDialRef = useRef<HTMLDivElement | null>(null)

    const openSpeedDial = () => setSpeedIsOpened(!speedIsOpened)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(speedDialRef.current && !speedDialRef.current.contains(event.target as Node)) {
                setSpeedIsOpened(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div ref={speedDialRef} className="flex items-center h-full lg:hidden">
            <div className={` ${!speedIsOpened ? 'bg-gray': 'bg-green-simple'} rounded-full w-10 h-10 flex justify-center items-center hover:scale-95 transition-all duration-200`} onClick={openSpeedDial}>
                {speedIsOpened? (
                    <button>
                        <IoClose className="fill-white-simple w-5 h-5" />
                    </button>
                ):(
                    <button>
                        <IoMenu className="stroke-white-simple w-5 h-5" />
                    </button>
                )}
            </div>
            {speedIsOpened ? (
                <div className="top-16 absolute grid gap-2 mx-1">
                    <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center hover:scale-95 transition-all duration-200 hover:bg-green-simple">
                    <Tooltip title="Transportadoras" placement="right">
                        <button>
                            <Link href={'/'}>
                                <LuClipboardList className={`stroke-white-simple hover:scale-95 w-4 h-4`}/>
                            </Link>
                        </button>
                    </Tooltip>
                    </div>
                    <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center hover:scale-95 transition-all duration-200 hover:bg-green-simple">
                    <Tooltip title="suporte" placement="right" >
                        <button>
                            <Link href={'http://ti.pormade.com.br:8080/ords/r/tecinfo/suporte-petim/home?session=15546297356718'}>
                                <LuHeadphones className={`stroke-white-simple hover:scale-95 w-4 h-4`}/>
                            </Link>
                        </button>
                    </Tooltip>    
                    </div>
                </div>
            ): ""}
        </div>
    )
}