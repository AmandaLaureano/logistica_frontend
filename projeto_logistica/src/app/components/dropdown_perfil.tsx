import React, { useState } from 'react';
import 'rc-dropdown/assets/index.css';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import { BsChevronCompactDown } from "react-icons/bs";
import { VscAccount, VscSignOut } from 'react-icons/vsc';
import Link from 'next/link';

export default function DropdownPerfil(){
    const [DropdownVisivel, setDropdownVisivel] = useState(false)

    function onSelect({ key }: { key: string }) {
        console.log(`${key} selected`);
    }

    function onVisibleChange(visible: boolean) {
        console.log(visible);
    }

    const DropdownPerfil = (
        <Menu className="flex flex-col w-[160px] h-[100px]" onSelect={onSelect}>
            <div className='divBotaoPerfil flex px-3 py-3'>
                <VscAccount className='w-6 h-6 mr-2'/>
                <Link href='/perfil'>
                    <button className=''>
                        <MenuItem className="text-lg tracking-wider" key="1">Seu perfil</MenuItem>
                    </button>
                </Link>
            </div>
            <div className='divBotaoSair flex px-3'>
                <VscSignOut className='w-6 h-6 mr-2'/>
                <Link href=''>
                    <button className=''>
                        <MenuItem className="text-lg tracking-wider" key="2">Sair</MenuItem>
                    </button>
                </Link>
            </div>
        </Menu>
    )
    return(
        <div className='containerDropdownPerfil flex items-end'>
            <Dropdown
            trigger={['click']}
            visible={DropdownVisivel}
            overlay={DropdownPerfil}
            animation="slide-up"
            onVisibleChange={setDropdownVisivel}
            >
            <button>
                <BsChevronCompactDown className='flex self-end w-8 h-7 fill-white stroke-white'/>
            </button>
            </Dropdown>
        </div>
    )
}