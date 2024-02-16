"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

export function SelectTransportadoras({ transportadoras }: any) {
    const [list, setList] = useState<boolean>(false)

    const router = useRouter();
    
    const dropdown = {
        open:{
            height: '100px',
            clipPath: `circle(300px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 60,
                restDelta: 2,
                
            }
        },
        closed: {
            height: '0px',
            clipPath: `circle(0px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    }

    const menuVariants = {
        open: { rotate: 90, transition: { duration: 0.3 } },
        closed: { rotate: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="bg-black-light rounded-[4px] shadow-md shadow-black-light">
            <button className="text-white mx-3 xmd:mx-6 py-2" onClick={() => setList(!list)}>
                <strong className="xl:text-2xl">
                    <div className="flex justify-between items-center font-normal">
                        <span className="py-1 font-medium text-sm sm:text-lg lg:text-xl 2xl:text-2xl">
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
                variants={dropdown}
                className="listItensDropdown list-none"
                style={{ opacity: list ? 1 : 0, overflow: 'hidden' }} 
            >
                {transportadoras.map((transportadora: any, index: number) => {
                    return (
                        <div key={transportadora.id} className="pb-2">
                            <button className="cursor-pointer text-sm sm:text-lg 2xl:text-xl ml-6" onClick={()=>{router.push(`/generalidades/${transportadora.id}`)}}>
                                <span className="hover:text-green-simple transition-all duration-300 text-white capitalize">{transportadora.nome}</span>
                            </button>
                        </div>
                    )
                })}
            </motion.li>
        </div>
    )
}