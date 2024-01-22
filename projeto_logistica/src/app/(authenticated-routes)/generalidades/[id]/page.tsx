'use client'
import { FormularioImpostos } from "../formulario-impostos"
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
        <div className="grid">
            <div className="bg-white-simple justify-self-center rounded-sm shadow-md shadow-black-gray-border my-20 w-11/12 lg:w-2/3 p-2 xmd:p-5">
                <div className="mb-12">
                    <div className="">
                        <div className="flex flex-col justify-center text-center pb-10 pt-5">
                            <p className="font-medium text-xl md:text-2xl 2xl:text-3xl py-4 sm:py-6 capitalize">Generalidades {transportadora && transportadora.nome}</p>
                            <h1 className="px-2 xmd:px-3 sm:px-4 text-center font-medium text-sm lg:text-base">
                                Para o processamento dos arquivos, é <span className="font-bold text-green-simple">OPCIONAL</span> a edição de valores e <span className="font-bold text-green-simple">OBRIGATÓRIO</span>  o anexo de um arquivo de transportadora válido
                            </h1>
                        </div>
                        <div className=" m-auto">
                            <div className="w-full h-12 border-b border-green-simple/20">
                                <div className="flex w-full h-full text-xl my-auto">
                                    <div className="mr-3 w-6/12 flex justify-start my-auto">
                                        <p className="font-medium flex justify-start text-sm xmd:text-base md:text-lg xl:text-xl">
                                            Componentes
                                        </p>
                                    </div>
                                    <div className="flex justify-end ml-3 w-6/12 my-auto">
                                        <div className="">
                                            <p className="font-medium flex mx-3 text-sm xmd:text-base md:text-lg xl:text-xl h-full items-center">Valores</p>
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
                                        params={params.id} id={0} transportadoraId={0}                                    
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
        </div>
    )
}