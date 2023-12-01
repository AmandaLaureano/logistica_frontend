'use client'
import { FormularioImpostos } from "../formulario-impostos"
import { BsCurrencyDollar } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { api } from "@/src/services/api";
import { IFormularioImpostos, ITransportadora } from "@/src/interfaces/app/generalidades";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Tooltip } from '@procore/core-react'
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function Generalidades({params}: any) {

    const [impostos, setImpostos] = useState<IFormularioImpostos | null>(null)
    const [impostosSBA, setImpostosSBA] = useState<IFormularioImpostos | null>(null)
    const [transportadora, setTransportadora] = useState< ITransportadora | null>(null)

    useEffect(() => {
        const fetchImpostos = async () => {
            try {
                const responseImpostos = await api.get(`http://192.168.155.22:3000/impostos/${params.id}`)
                const responseImpostosSBA = await api.get(`http://192.168.155.22:3000/sba/${params.id}`)
                const responseNomeTransportadora = await api.get(`http://192.168.155.22:3000/transportadora/${params.id}`)

                setImpostos(responseImpostos.data)
                setImpostosSBA(responseImpostosSBA.data)
                setTransportadora(responseNomeTransportadora.data)
            }catch (error) {
                console.error("Erro ao buscar os dados:", error)
                setImpostos(null)
                setImpostosSBA(null)
                setTransportadora(null)
            }
        };

        fetchImpostos();
    }, [params.id]);

    // console.log(impostos)
    // console.log(impostosSBA)
    // console.log(transportadora)

    return (
        <div className="bg-white-simple rounded-sm shadow-md shadow-black-gray-border mt-12 md:mx-24">
            <div className="m-3 xmd:m-5 sm:m-7">
                <div className="w-full">
                    <div className="mb-12 w-full">
                        <div className="w-full flex justify-center text-center  pt-10 pb-5">
                            <LiaFileInvoiceDollarSolid className="hidden sm:flex fill-green-simple sm:h-6 sm:w-6 md:h-8 md:w-8 2xl:w-9 2xl:h-9 mx-2"/>
                            <p className="font-medium text-xl md:text-2xl 2xl:text-3xl capitalize">Generalidades {transportadora && transportadora.nome}</p>
                        </div>
                        <div className="w-full h-12 border-b-2 border-gray-line">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className="mr-3 w-6/12 flex justify-start my-auto">
                                    <p className="flex justify-start text-sm xmd:text-base md:text-lg xl:text-xl font-medium">
                                        Componentes
                                    </p>
                                </div>
                                <div className="flex justify-end ml-3 w-6/12 my-auto">
                                    <div className="">
                                        <p className="flex j text-sm xmd:text-base md:text-lg xl:text-xl font-medium h-full items-center">Valor</p>
                                    </div>
                                    <Tooltip overlay="Os valores podem ser alterados!" trigger="hover">
                                        <div className="rounded-full p-1">
                                            <BsFillQuestionCircleFill />
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        {impostos && impostosSBA ? (
                            <div className="">
                                <FormularioImpostos
                                    trt={impostos.trt}
                                    tda={impostos.tda}
                                    despacho={impostos.despacho}
                                    pegadio={impostos.pegadio}
                                    gris={impostos.gris}
                                    adVal={impostos.adVal}
                                    cam={impostos.cam}
                                    prazo={impostosSBA.prazo}
                                    adv={impostosSBA.adv}
                                    kg={impostosSBA.kg}
                                />
                            </div>
                        ): (
                            <div className="pt-10 pb-10 animate-pulse">
                                <Skeleton className="h-12 m-2" baseColor="#CCCCCC" enableAnimation={false} count={6}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}