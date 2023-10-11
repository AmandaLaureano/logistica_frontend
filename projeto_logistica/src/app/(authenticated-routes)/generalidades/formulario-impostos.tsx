'use client'

import { InputArquivo } from "@/src/components/input-arquivo"
import Linha from "./linha-formulario"
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
            {impostos && (
                <>
                    <Linha nomeImposto={"TRT"} valorImposto={trtValue ? trtValue : 0} onChangeValor={(e: any) => setTrtValue(e.target.value)} />
                    <Linha nomeImposto={"TDA"} valorImposto={tdaValue ? tdaValue : 0} onChangeValor={(e: any) => setTdaValue(e.target.value)} />
                    <Linha nomeImposto={"DESPACHO"} valorImposto={despachoValue ? despachoValue : 0} onChangeValor={(e: any) => setDespachoValue(e.target.value)} />
                    <Linha nomeImposto={"PEDÁGIO"} valorImposto={pedagioValue ? pedagioValue : 0} onChangeValor={(e: any) => setPedagioValue(e.target.value)} />
                    <Linha nomeImposto={"GRIS"} valorImposto={grisValue ? grisValue : 0} onChangeValor={(e: any) => setGrisValue(e.target.value)} />
                    <Linha nomeImposto={"ADVAL"} valorImposto={adValValue ? adValValue : 0} onChangeValor={(e: any) => setAdValValue(e.target.value)} />
                    <Linha nomeImposto={"CAM"} valorImposto={camValue ? camValue : 0} onChangeValor={(e: any) => setCamValue(e.target.value)} />
                    <Linha nomeImposto={"PRAZO"} valorImposto={prazoValue ? prazoValue : 0} onChangeValor={(e: any) => setPrazoValue(e.target.value)} />
                    <Linha nomeImposto={"ADV"} valorImposto={advValue ? advValue : 0} onChangeValor={(e: any) => setAdvValue(e.target.value)} />
                    <Linha nomeImposto={"KG"} valorImposto={kgValue ? kgValue : 0} onChangeValor={(e: any) => setKgValue(e.target.value)} />
                </>
            )}
            <div className="flex flex-col md:flex-row py-10 gap-5">
                <div className="w-full">
                    <InputArquivo placeholder={"Anexar Arquivo"} texto={"Anexar Arquivo"} onChange={upaArquivo} />
                    {arquivo.name != undefined &&
                        <div className="flex justify-between rounded-sm shadow-inner shadow-black-light/30 my-3 bg-white">
                            <div className="">
                                <span className="text-xs font-medium mx-2">
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
                    <button className="w-full py-1 h-fit shadow-inner bg-green-simple shadow-black-light/30 text-white rounded-sm lg:text-lg px-5 hover:scale-95 transition-all duration-200" onClick={postImpostos}>
                        <label className='h-full text-placeholder lg:text-lg overflow-hidden cursor-pointer'>
                            Enviar Alterações
                            {routerParams.transportadora}
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}