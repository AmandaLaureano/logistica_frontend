'use client'

import { InputArquivo } from "@/src/components/input-arquivo"
import Line from "./linha-formulario"
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useParams } from "next/navigation";
import Swal from 'sweetalert2';

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
    const { id } = useParams();
    const [impostos, setImpostos] = useState<number | null>()
    const [sbaImpostos, setSbaImpostos] = useState<number | null>()

    useEffect(() => {
        api.get(`http://192.168.155.22:3000/impostos/1`)
        .then(({data}) => {
            setImpostos(data)
        })
        .catch((error) => { 
            setImpostos(null)
        })
        
        api.get(`http://192.168.155.22:3000/sba/1`)
        .then(({data}) => {
            setSbaImpostos(data)
        })
        .catch((error) => { 
            setSbaImpostos(null)
        })
        
    }, [])

    console.log(impostos)
    console.log(sbaImpostos)
    
    function postImpostos() {
        api.post("/impostos", {
            id: 1,
            transportadoraId: 1,
            trt: trtValue,
            tda: trtValue,
            gris: grisValue,
            adVal: adValValue,
            despacho: despachoValue,
            pedagio: pedagioValue,
            cam: camValue,
            arquivoExcel: arquivo
        })
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log('Erro:', err);
        });
        
        Swal.fire({
            customClass: {
                title:"text-xl",
                popup:"shadow-md shadow-black-light rounded-lg",
                cancelButton: "shadow-sm shadow-black-light",
                confirmButton: "shadow-sm shadow-black-light",
            },
            icon: "success",
            title: "Arquivo em espera... Deseja cadastrar nova generalidade?",
            cancelButtonText: '<a href="/">Sim</a>',
            cancelButtonColor: "#D52C2C",
            confirmButtonText: '<a href="/arquivos">Não</a>',
            confirmButtonColor: "#509D45",
            showConfirmButton: true,
            showCancelButton: true,
            reverseButtons: true,
            
        })
    }

    function upaArquivo(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const value = e.target.files[0];
            setArquivo(value)
        }
    }

    const routerParams = useParams()

    return (
        <div>
            <hr className="border border-gray-line"/>
                {impostos && (
                    <>
                        <Line nomeImposto={"TRT"} valorImposto={trtValue ? trtValue : 0} valorMinimo={0} onChangeValor={(e: any) => setTrtValue(e.target.value)} />
                        <Line nomeImposto={"TDA"} valorImposto={tdaValue ? tdaValue : 0} valorMinimo={0} onChangeValor={(e: any) => setTdaValue(e.target.value)} />
                        <Line nomeImposto={"GRIS"} valorImposto={grisValue ? grisValue : 0} valorMinimo={0} onChangeValor={(e: any) => setGrisValue(e.target.value)} />
                        <Line nomeImposto={"AD_VAL"} valorImposto={adValValue ? adValValue : 0} valorMinimo={0} onChangeValor={(e: any) => setAdValValue(e.target.value)} />
                        <Line nomeImposto={"DESPACHO"} valorImposto={despachoValue ? despachoValue : 0} valorMinimo={0} onChangeValor={(e: any) => setDespachoValue(e.target.value)} />
                        <Line nomeImposto={"PED"} valorImposto={pedagioValue ? pedagioValue : 0} valorMinimo={0} onChangeValor={(e: any) => setPedagioValue(e.target.value)} />
                        <Line nomeImposto={"CAM"} valorImposto={camValue ? camValue : 0} valorMinimo={0} onChangeValor={(e: any) => setCamValue(e.target.value)} />
                        <Line nomeImposto={"PRAZO"} valorImposto={prazoValue ? prazoValue : 0} valorMinimo={0} onChangeValor={(e: any) => setPrazoValue(e.target.value)} />
                        <Line nomeImposto={"ADV"} valorImposto={advValue ? advValue : 0} valorMinimo={0} onChangeValor={(e: any) => setAdvValue(e.target.value)} />
                        <Line nomeImposto={"KG"} valorImposto={kgValue ? kgValue : 0} valorMinimo={0} onChangeValor={(e: any) => setKgValue(e.target.value)} />
                    </>
                )}
            <div>
                <div className="flex flex-col justify-center sm:flex-row sm:justify-between py-5">
                    <div className="pt-8">
                        <InputArquivo placeholder={"Anexar arquivo"} texto={"Anexar arquivo"} onChange={upaArquivo} />
                        {arquivo.name != undefined &&
                            <div className="flex justify-between bg-green-simple/20 px-2 rounded-md mt-2">
                                <div className="">
                                    <span className="text-xs">
                                        {arquivo.name}
                                    </span>
                                </div>
                                <div className="flex items-center my-1">
                                    <button className="" onClick={() => setArquivo({} as File)}>
                                        <MdClose className="hover:scale-95 duration-200 ml-3 fill-red" size={20} />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="py-8">
                        <button className="w-full h-full bg-black shadow-md shadow-black-light text-white rounded-sm lg:text-lg px-5 hover:scale-95 transition-all duration-200 py-1" onClick={postImpostos}>
                            Enviar tudo {routerParams.transportadora}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}