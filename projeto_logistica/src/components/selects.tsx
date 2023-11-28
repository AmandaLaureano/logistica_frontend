"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";

export function SelectTransportadoras({ Transportadoras }: any) {
    const [list, setList] = useState<boolean>(false)
    
    const sidebar = {
        open:{
            height: '100px',
            transition: {
                type: "spring",
                stiffness: 60,
                restDelta: 2,
                
            }
        },
        closed: {
            height: '0px',
            opacity: list ? 0 : 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                heigth: 0
            }
        }
    }

    const menuVariants = {
        open: { rotate: 90, transition: { duration: 0.2 } },
        closed: { rotate: 0, transition: { duration: 0.2 } },
    };


    return (
        <div className="bg-black-light rounded-[4px] shadow-md shadow-black-light">
            <button className="text-white mx-3 xmd:mx-6 py-2" onClick={() => setList(!list)}>
                <strong className="xl:text-2xl">
                    <div className="flex justify-between items-center font-normal">
                        <span className="py-1 font-medium  text-sm sm:text-lg xl:text-xl">
                            Transportadoras
                        </span>
                        <div className="text-white ml-3">
                            <motion.div
                                variants={menuVariants}
                                animate={list ? "open" : "closed"}
                            >
                                <BsChevronCompactRight className="w-5 fill-white"/>
                            </motion.div>
                        </div>
                    </div>
                </strong>
            </button>
            <motion.li
                initial={false}
                animate={list ? "open" : "closed"}
                variants={sidebar}
                className="listItensDropdown list-none"
            >
                {Transportadoras.map((item: any, index: number) => {
                    return (
                        <div key={index} className="pb-2">
                            <Link href={(`/generalidades/${item.id}`)}>
                                <button className="cursor-pointer text-sm sm:text-lg xl:text-xl ml-6">
                                    <span className="buttonGreenHover text-white">{item.nome}</span>
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </motion.li>
        </div>
    )
}