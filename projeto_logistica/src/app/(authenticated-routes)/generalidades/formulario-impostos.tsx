'use client'

import { InputArquivo } from "@/src/components/input-arquivo"
import Linha from "./linha-formulario"
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useRouter } from "next/router"

export function FormularioImpostos({ trt, tda, despacho, pegadio, gris, adVal, cam, prazo, adv, kg }: IFormularioImpostos, {params} : {params: {slug : string}}) {

    const [trtValue, setTrtValue] = useState(trt)
    const [tdaValue, setTdaValue] = useState(tda)
    const [despachoValue, setDespachoValue] = useState(despacho)
    const [pedagioValue, setPedagioValue] = useState(pegadio)
    const [grisValue, setGrisValue] = useState(gris)
    const [adValValue, setAdValValue] = useState(adVal)
    const [camValue, setCamValue] = useState(cam)
    const [prazoValue, setPrazoValue] = useState(prazo)
    const [advValue, setAdvValue] = useState(adv)
    const [kgValue, setKgValue] = useState(kg)
    const [arquivo, setArquivo] = useState<File>({} as File)
    
    const router = useRouter();
    const { id } = router.query; 

    function patchImpostos() {
        api.patch(`/impostos/${id}`, {
            id: id,
            transportadoraId: id,
            trt: trtValue,
            tda: tdaValue,
            despacho: despachoValue,
            pegagio: pedagioValue,
            gris: grisValue,
            adVal: adValValue,
            cam: camValue,
        })
        api.patch(`/sba/${id}`, {
            prazo: prazoValue,
            adv: advValue,
            kg: kgValue
        })
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log('Erro: Não foi possível enviar os dados!', err);
        });
    }

    function patchArquivo(){
        api.post(`/gobor/upload`, {
            anexo: arquivo
        })
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log('Erro:', err);
        });
    }

    function upaArquivo(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const value = e.target.files[0];
            setArquivo(value)
            
        }
    }

    return (
        <div>
            <Linha nomeImposto={"TRT"} infoImposto={"Taxa de Restrição de Trânsito"} valorImposto={trtValue ? trtValue: 0} onChangeValue={(e: any) => setTrtValue(e.target.value)} />
            <Linha nomeImposto={"TDA"} infoImposto={"Taxa de Difícil Acesso"} valorImposto={tdaValue ? tdaValue: 0} onChangeValue={(e: any) => setTdaValue(e.target.value)} />
            <Linha nomeImposto={"TAXA DE DESPACHO"} infoImposto={""} valorImposto={despachoValue ? despachoValue: 0} onChangeValue={(e: any) => setDespachoValue(e.target.value)} />
            <Linha nomeImposto={"PEDÁGIO"} infoImposto={""} valorImposto={pedagioValue ? pedagioValue: 0} onChangeValue={(e: any) => setPedagioValue(e.target.value)} />
            <Linha nomeImposto={"GRIS"} infoImposto={"Gerenciamento de Riscos"} valorImposto={grisValue ? grisValue : 0} onChangeValue={(e: any) => setGrisValue(e.target.value)} />
            <Linha nomeImposto={"ADVAL"} infoImposto={""} valorImposto={adValValue ? adValValue: 0} onChangeValue={(e: any) => setAdValValue(e.target.value)} />
            <Linha nomeImposto={"CAM"} infoImposto={"Custo Adicional de Manuseio e Separação"} valorImposto={camValue ? camValue : 0} onChangeValue={(e: any) => setCamValue(e.target.value)} />
            <Linha nomeImposto={"PRAZO"} infoImposto={"SBA"} valorImposto={prazoValue ? prazoValue: 0} onChangeValue={(e: any) => setPrazoValue(e.target.value)} />
            <Linha nomeImposto={"ADV"} infoImposto={"SBA"} valorImposto={advValue ? advValue: 0} onChangeValue={(e: any) => setAdvValue(e.target.value)} />
            <Linha nomeImposto={"KG"} infoImposto={"SBA"} valorImposto={kgValue ? kgValue: 0} onChangeValue={(e: any) => setKgValue(e.target.value)} />
            <div className="flex flex-col md:flex-row py-10 gap-5">
                <div className="w-full">
                    <InputArquivo placeholder={"Anexar Arquivo"} texto={"Anexar Arquivo"} onChange={upaArquivo} />
                    {arquivo.name != undefined &&
                        <div className="flex justify-between rounded-sm shadow-inner shadow-black-light/30 my-3 bg-white">
                            <div className="truncate py-1">
                                <span className="text-sm font-medium  mx-2">
                                    {arquivo.name}
                                </span>
                            </div>
                            <div className="flex justify-end my-1">
                                <button className="" onClick={() => setArquivo({} as File)}>
                                    <MdClose className=" hover:scale-95 duration-200 mx-2 fill-red" size={20} />
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="w-full">
                    <button className="w-full py-1 h-fit shadow-inner bg-green-simple shadow-black-light/30 text-white rounded-sm lg:text-lg px-5 hover:scale-95 transition-all duration-200" onClick={() => {patchImpostos(); patchArquivo()}}>
                        <label className='h-full text-placeholder lg:text-lg overflow-hidden cursor-pointer'>
                            Enviar Alterações
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}