'use client'

import { InputFile } from "@/src/components/inputs"
import Line from "./line-form"
import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { api } from "@/src/services/api"
import { ITaxForms } from "../../../interfaces/app/generalidades"
import { useParams } from "next/navigation";
import Swal from 'sweetalert2';

export function FormTax({ trt, tda, gris, adVal, despacho, pedagio, cam, }: ITaxForms,{params} : {params: {slug : string}}) {

    const [trtValue, setTrtValue] = useState(trt)
    const [tdaValue, setTdaValue] = useState(tda)
    const [grisValue, setGrisValue] = useState(gris)
    const [adValValue, setAdValValue] = useState(adVal)
    const [despachoValue, setDespachoValue] = useState(despacho)
    const [pedagioValue, setPedagioValue] = useState(pedagio)
    const [camValue, setCamValue] = useState(cam)
    const [attachment, setAttachment] = useState<File>({} as File)

    function postForm() {
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
            attachment: attachment
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
            title: "Dados salvos! Deseja gerar este arquivo ou cadastrar nova generalidade?",
            cancelButtonText: '<a href="/">Nova generalidade</a>',
            cancelButtonColor: "#D52C2C",
            confirmButtonText: "Gerar arquivo",
            confirmButtonColor: "#509D45",
            showConfirmButton: true,
            showCancelButton: true,
            reverseButtons: true,
        })
    }

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const value = e.target.files[0];
            setAttachment(value)
        }
    }

    const routerParams = useParams()

    return (
        <div>
            <hr className="border border-gray-line"/>
            <div>
                <Line field={"TRT"} valueField={trtValue ? trtValue : 0} minValueField={0} onChangeValue={(e: any) => setTrtValue(e.target.value)} />
                <Line field={"TDA"} valueField={tdaValue ? tdaValue : 0} minValueField={0} onChangeValue={(e: any) => setTdaValue(e.target.value)} />
                <Line field={"GRIS"} valueField={grisValue ? grisValue : 0} minValueField={0} onChangeValue={(e: any) => setGrisValue(e.target.value)} />
                <Line field={"AD_VAL"} valueField={adValValue ? adValValue : 0} minValueField={0} onChangeValue={(e: any) => setAdValValue(e.target.value)} />
                <Line field={"DESPACHO"} valueField={despachoValue ? despachoValue : 0} minValueField={0} onChangeValue={(e: any) => setDespachoValue(e.target.value)} />
                <Line field={"PED 100KG"} valueField={pedagioValue ? pedagioValue : 0} minValueField={0} onChangeValue={(e: any) => setPedagioValue(e.target.value)} />
                <Line field={"CAM"} valueField={camValue ? camValue : 0} minValueField={0} onChangeValue={(e: any) => setCamValue(e.target.value)} />
            </div>
            <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="py-5">
                        <InputFile placeholder={"Anexar arquivo"} text={"Anexar arquivo"} onChange={handleFile} />
                        {attachment.name != undefined &&
                            <div className="flex w-full bg-green-simple/10 px-2 rounded-md mt-2">
                                <div className="ContainerScrollHidden w-full">
                                    <span className="text-sm font-medium">
                                    {attachment.name}
                                    </span>
                                </div>
                                <div className="">
                                    <button className="" onClick={() => setAttachment({} as File)}>
                                        <AiFillCloseCircle className="hover:scale-95 duration-200 ml-2 fill-red" size={20} />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="py-5">
                        <button className="bg-black shadow-md shadow-black-light text-white rounded-sm text-xs xl:text-sm px-5 hover:scale-95 transition-all duration-200 py-2" onClick={postForm}>
                            Enviar tudo {routerParams.transportadora}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}