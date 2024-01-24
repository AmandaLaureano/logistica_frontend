'use client'
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { BsThreeDotsVertical  } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { MdOutlineHeadsetMic} from "react-icons/md"
import { FaTruckFast } from "react-icons/fa6"
import { motion } from "framer-motion"
import { titulosMenu } from '../items-menu/items-menu'

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

    function changeIcon(icon: string | undefined){
        switch(icon){
            case(icon = 'transportadoras'):
                return (
                    <FaTruckFast className={`fill-white-simple hover:scale-95 w-5 h-5`}/>
                )
            case(icon = 'suporte'):
                return (
                    <MdOutlineHeadsetMic className={`fill-white-simple hover:scale-95 w-5 h-5`}/>
                ) 
        }
    }

    return(
        <div ref={speedDialRef} className="flex items-center h-full lg:hidden">
            <div className={`w-10 h-10 flex justify-center items-center hover:scale-95 transition-all duration-200`} onClick={openSpeedDial}>
                {speedIsOpened? (
                    <button className="outline-none">
                        <IoClose className="fill-red w-8 h-8" />
                    </button>
                ):(
                    <button className="outline-none">
                        <BsThreeDotsVertical  className="fill-green-simple w-8 h-8" />
                    </button>
                )}
            </div>
            {speedIsOpened && (
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    className="top-16 absolute grid bg-black/90 p-2 rounded-md">
                        {titulosMenu.map((item, index) => {
                            return(
                                item.href && (
                                    <Link className="hover:bg-white-simple/20 py-1 rounded-sm hover:scale-95 transition-all duration-200" key={index} href={item.href ?? ''}>
                                        <div className="flex items-strech ml-1">
                                            <div className="m-1">
                                                <span>{changeIcon(item.icon)}</span>
                                            </div>
                                            <div className="mx-3 flex items-end">
                                                <span className="text-white-simple font-medium mt-1">{item.texto}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )
                        })}
                </motion.div>
            )}
        </div>
    )
}