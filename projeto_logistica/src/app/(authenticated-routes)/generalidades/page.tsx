'use client'
import { FormularioImpostos } from "./formulario-impostos"
import { BsCurrencyDollar } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { api } from "@/src/services/api";
import { IFormularioImpostos } from "@/src/interfaces/app/generalidades";

export default async function Generalidades() {

    const getImpostos = await api.get(`/impostos/1`)
        .then(resp => {
            console.log(resp.data)
            return resp.data
        })
        .catch(err => {
            console.log(err.message)
            return("sem valor")
        })
    const getImpostosSBA = await api.get(`/sba/1`)
        .then(resp => {
            console.log(resp.data)
            return resp.data
        })
        .catch(err => {
            console.log(err.message)
            return("sem valor")
        })

    const Impostos: IFormularioImpostos = getImpostos
    const ImpostosSBA: IFormularioImpostos = getImpostosSBA

    return (
        <div className="bg-white-simple rounded-sm shadow-md shadow-black-gray-border mt-12 md:mx-24">
            <div className="m-3 xmd:m-5 sm:m-7">
                <div className="w-full">
                    <div className="mb-12 w-full">
                        <div className="w-full flex justify-center pt-10 pb-5">
                            <LiaFileInvoiceDollarSolid className="hidden sm:flex fill-green-simple w-9 h-9 mx-2"/>
                            <p className="font-medium text-xl md:text-2xl">Generalidades</p>
                        </div>
                        <div className="w-full h-12 border-b-2 border-gray-line">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className="mx-3 w-6/12 flex justify-start my-auto">
                                    <p className="flex justify-start text-sm xmd:text-base md:text-lg xl:text-xl font-medium">
                                        Componentes
                                    </p>
                                </div>
                                <div className="flex justify-end mx-3 w-6/12 my-auto">
                                    <p className="flex text-sm xmd:text-base md:text-lg xl:text-xl font-medium h-full items-center">
                                        <BsCurrencyDollar className="hidden xmd:flex fill-green-simple w-6 h-5"/>Valores
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <FormularioImpostos
                                trt={Impostos.trt}
                                tda={Impostos.tda}
                                despacho={Impostos.despacho}
                                pegadio={Impostos.pegadio}
                                gris={Impostos.gris}
                                adVal={Impostos.adVal}
                                cam={Impostos.cam}
                                prazo={ImpostosSBA.prazo}
                                adv={ImpostosSBA.adv}
                                kg={ImpostosSBA.kg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}