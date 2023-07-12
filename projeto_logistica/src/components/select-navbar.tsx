'use client'
import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BsChevronCompactDown, BsChevronCompactUp, BsPersonGear} from 'react-icons/bs';
import { TbLogout } from 'react-icons/tb'
import Link from 'next/link';

export function DropdownMenuNavbar(){
    const [changeIconArrow, setChangeIconArrow] = useState(false)

    const changeIconSelect = () => {
        setChangeIconArrow(true)
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {changeIconArrow ? (
                    <button className="rounded-full inline-flex items-center justify-center outline-none" aria-label="Customise options">
                        <BsChevronCompactUp className='hover:scale-95 w-5 h-5 mt-1 fill-white' onClick={changeIconSelect}/>
                    </button>
                ):(
                    <button className="rounded-full inline-flex items-center justify-center outline-none" aria-label="Customise options">
                        <BsChevronCompactDown className='hover:scale-95 w-5 h-5 mt-1 fill-white' onClick={changeIconSelect}/>
                    </button>
                )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal className=''>
                <DropdownMenu.Content className="mr-7 w-28 bg-white-gray rounded-md shadow-sm shadow-gray" sideOffset={5}>
                    <button className='w-full'>
                        <Link href="/perfil">
                            <DropdownMenu.Item className='flex items-stretch px-2 py-1 outline-none hover:rounded-md hover:bg-green-simple/20'>
                                <BsPersonGear className='w-5 h-5 mx-1 mt-1'/>
                                <span className='text-[16px] font-medium mt-1'>Perfil</span>
                            </DropdownMenu.Item>
                        </Link>
                    </button>
                    <button className='w-full'>
                        <DropdownMenu.Item className='flex items-stretch px-2 py-1 outline-none hover:rounded-md hover:bg-green-simple/20'>
                            <TbLogout className='w-5 h-5 mx-1 mb-1'/>
                            <span className='text-[16px] font-medium mb-1'>Sair</span>
                        </DropdownMenu.Item>
                    </button>
                    <DropdownMenu.Arrow className="fill-white-gray" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};