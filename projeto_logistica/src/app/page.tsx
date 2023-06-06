'use client'
import { useEffect, useState } from "react";
import axios from 'axios';
import classNames from "classnames";
import Aside from "@components/patterns/aside";
import  DropdownTransportadoras  from "@components/selects";
import Navbar from "@components/patterns/navbar";

import { tCategoriasDropdownTrasportadoras, tSubcategoriasDropdownTransportadoras } from "../types/types";

export default function Dashboard() {
    const [Categorias, setCategorias] = useState<tCategoriasDropdownTrasportadoras>([])
    const [Subcategorias, setSubcategorias] = useState<tSubcategoriasDropdownTransportadoras>([])

    useEffect(() => {
        axios.get('http://localhost:3000/categorias').then(({ data }) => {
            setCategorias(data)
        })
        let FiltraCategoria: tCategoriasDropdownTrasportadoras = Categorias.map(categoria => {
            return {
                id: categoria.id,
                nome: categoria.nome,
                state: false
            }
        })
        setCategorias(FiltraCategoria)

        axios.get('http://localhost:3000/subcategorias').then(({ data }) => {
            setSubcategorias(data)
        })
    }, [])

    function abreFechaDropdown(nome: any) {
        let NovaListaCategorias: tCategoriasDropdownTrasportadoras = Categorias.map(categoria => {
            return {
                id: categoria.id,
                nome: categoria.nome,
                state: (categoria.nome === nome) ? !categoria.state : categoria.state
            }
        })
        setCategorias(NovaListaCategorias)
    }

    return (
        <div className="conteudoTotal grid justify-items-stretch h-full bg-white">
            <div className="containerCabecalho z-30 flex flex-wrap w-full h-[90px]">
                <Navbar />
            </div>
            <div className="containerMenuLateral z-20 flex items-end fixed h-full w-[300px]">
                <Aside />
            </div>
            <div className="containerConteudoHome z-10 grid justify-self-end w-full h-full bg-white">
                <div className="conteudoTransportadoras bg-light-gray ml-80 mt-28 place-self-center h-[500px] w-[50%] rounded-xl border-[1px] border-black-gray-border">
                    <div className="containerTitulo flex justify-center pt-14">
                        <h1 className="text-3xl font-medium">Selecione uma Transportadora</h1>
                    </div>
                    <div className="containerDropdown flex justify-center h-fit pt-12">
                        {Categorias.map((categoria, index) => (
                            <div key={categoria.id} className={classNames({
                                ["listaDropdown rounded-lg bg-black mb-12"]: true
                            })}>
                                <DropdownTransportadoras status={categoria.state} value={categoria.nome} onClick={() => abreFechaDropdown(categoria.nome)} />
                                <ul key={categoria.id} className={classNames({
                                    ["hidden"]: !categoria.state
                                })}>
                                    {Subcategorias.map((subcategoria, index) => (
                                        <li key={subcategoria.id} className={`itensDropdown outline-none px-9 pb-5 text-white flex items-center justify-start text-2xl h-10 cursor-pointer rounded-md`}>
                                            {subcategoria.nome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}    
