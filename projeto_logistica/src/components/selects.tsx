"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactRight } from "react-icons/bs";
import { useRouter } from "next/navigation";


export function SelectTransportadoras({ ArrayTransportadoras }: any) {
    const [list, setList] = useState<boolean>(false)
    const router = useRouter()
    const sidebar = {
        open: (height = 200) => ({
            height: '150px',
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 60,
                restDelta: 2,
                
            }
        }),
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
            <button className="text-white px-6 py-2" onClick={() => setList(!list)}>
                <strong className="xl:text-2xl">
                    <div className="flex justify-between items-center font-normal">
                        <span className="px-3 py-1 font-medium">
                            Transportadoras
                        </span>
                        <hr className="bg-light-gray w-8 rotate-90" />
                        <div className="text-white">
                            <motion.div
                                variants={menuVariants}
                                animate={list ? "open" : "closed"}
                            >
                                <BsChevronCompactRight className="w-6 fill-white"/>
                            </motion.div>
                        </div>
                    </div>
                </strong>
            </button>
            <motion.li
                initial={false}
                animate={list ? "open" : "closed"}
                variants={sidebar}
                className="listItensDropdown overflow-auto list-none"
            >
                {ArrayTransportadoras.map((item: any, index: number) => {
                    return (
                        <div key={index} className="pb-2">
                            <button className="cursor-pointer text-xl ml-6" onClick={()=>{router.push(`generalidades/${item.nome}`)}}>
                                <span className="buttonGreenHover text-white">{item.nome}</span>
                            </button>
                        </div>
                        
                    )
                })}
            </motion.li>
        </div>
    )
}