"use client"

import { BsChevronCompactDown } from "react-icons/bs";
import { VscAccount, VscSignOut } from 'react-icons/vsc';
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactRight } from "react-icons/bs";

export function DropdownPerfil() {

    function onSelect({ key }: { key: string }) {
        console.log(`${key} selected`);
    }

    function onVisibleChange(visible: boolean) {
        console.log(visible);
    }

    const DropdownPerfil = (
        <div className="flex flex-col w-[160px] h-[100px]"
        // onSelect={onSelect}
        >
            <div className='divBotaoPerfil flex px-3 py-3'>
                <VscAccount className='w-6 h-6 mr-2' />
                <Link href='/perfil'>
                    <button className=''>
                        <div className="text-lg tracking-wider" key="1">Seu perfil </div>
                    </button>
                </Link>
            </div>
            <div className='divBotaoSair flex px-3'>
                <VscSignOut className='w-6 h-6 mr-2' />
                <Link href=''>
                    <button className=''>
                        <div className="text-lg tracking-wider" key="2">Sair</div>
                    </button>
                </Link>
            </div>
        </div>
    )
    return (
        <div className='containerDropdownPerfil flex items-end'>
            <div
            // trigger={['click']}
            // visible={undefined}
            // overlay={DropdownPerfil}
            // animation="slide-up"
            // onVisibleChange={undefined}
            >
                <button>
                    <BsChevronCompactDown className='flex self-end w-8 h-7 fill-white stroke-white' />
                </button>
            </div>
        </div>
    )
}

export function SelectTransportadoras({ ArrayTransportadoras }: any) {
    const [list, setList] = useState<boolean>(false)
    const sidebar = {
        open: (height = 200) => ({
            height: 'auto',
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
                height: 20
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
                style={{ overflow: 'hidden' }}
                className="list-none"
            >
                {ArrayTransportadoras.map((item: any, index: number) => {
                    return (
                        <div key={index} className="">
                            <div className="cursor-pointer py-1 text-xl ml-4">
                                <span className="botaoDropdown text-white">{item.nome}</span>
                            </div>
                        </div>
                    )
                })}
            </motion.li>
        </div>
    )
}