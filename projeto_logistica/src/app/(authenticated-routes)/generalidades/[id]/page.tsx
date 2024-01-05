'use client'
import { FormularioImpostos } from "../formulario-impostos"
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { api } from "@/src/services/api";
import { IFormularioImpostos, ITransportadora } from "@/src/interfaces/app/generalidades";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

    return (
        <div className="bg-white-simple rounded-sm shadow-md shadow-black-gray-border mt-12 md:mx-24">
            <div className="m-3 xmd:m-5 sm:m-7">
                <div className="w-full">
                    <div className="mb-12 w-full">
                        <div className="w-full flex flex-col justify-center text-center pb-10 pt-5">
                            <p className="font-medium text-xl md:text-2xl 2xl:text-3xl py-4 sm:py-6 capitalize">Generalidades {transportadora && transportadora.nome}</p>
                            <h1 className="px-2 xmd:px-3 sm:px-4 text-center font-medium text-sm md:text-base lg:text-lg">
                                Faça a alteração dos valores desejados e anexe um arquivo para o processamento
                            </h1>
                        </div>
                        <div className="w-full h-12 border-b-2 border-gray-line">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className="mr-3 w-6/12 flex justify-start my-auto">
                                    <p className="flex mx-3 justify-start text-sm xmd:text-base md:text-lg xl:text-xl font-medium">
                                        Componentes
                                    </p>
                                </div>
                                <div className="flex justify-end ml-3 w-6/12 my-auto">
                                    <div className="">
                                        <p className="flex mx-3 text-sm xmd:text-base md:text-lg xl:text-xl font-medium h-full items-center">Valores</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {impostos && impostosSBA ? (
                            <div className="">
                                <FormularioImpostos
                                    trt={impostos.trt}
                                    tda={impostos.tda}
                                    despacho={impostos.despacho}
                                    pedagio={impostos.pedagio}
                                    gris={impostos.gris}
                                    adVal={impostos.adVal}
                                    cam={impostos.cam}
                                    prazo={impostosSBA.prazo}
                                    adv={impostosSBA.adv}
                                    kg={impostosSBA.kg}
                                    params={params.id}
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