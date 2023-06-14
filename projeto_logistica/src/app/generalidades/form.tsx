'use client'

import { InputFile } from "@/src/components/inputs"
import Line from "./lineForm"
import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

export function FormTax({ trt, tda, gris, adVal, despacho, pegadio, cam, }: ITaxForms) {

    const baseUrl = "http://192.168.50.100:3000/impostos"

    const [trtValue, setTrtValue] = useState(trt)
    const [tdaValue, setTdaValue] = useState(tda)
    const [grisValue, setGrisValue] = useState(gris)
    const [adValValue, setAdValValue] = useState(adVal)
    const [despachoValue, setDespachoValue] = useState(despacho)
    const [pegadioValue, setPegadioValue] = useState(pegadio)
    const [camValue, setCamValue] = useState(cam)
    const [attachment, setAttachment] = useState<File>({} as File)

    function postForm() {
        const Form = {
            id: 1,
            transportadoraId: 1,
            trt: trtValue,
            tda: trtValue,
            gris: grisValue,
            adVal: adValValue,
            despacho: despachoValue,
            pegadio: pegadioValue,
            cam: camValue
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Form)
        }).then(res => {
            console.log(' deu boa pia')
            console.log(res);
        }).catch(err => {
            console.log('Erro:', err);
        });
    }

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const value = e.target.files[0];
            setAttachment(value)
        }
    }

    return (
        <div>
            <div>
                <Line field={"TRT"} valueField={trtValue ? trtValue : 0} minValueField={0} onChangeValue={(e: any) => setTrtValue(e.target.value)} />
                <Line field={"TDA"} valueField={tdaValue ? tdaValue : 0} minValueField={0} onChangeValue={(e: any) => setTdaValue(e.target.value)} />
                <Line field={"GRIS"} valueField={grisValue ? grisValue : 0} minValueField={0} onChangeValue={(e: any) => setGrisValue(e.target.value)} />
                <Line field={"AD_VAL"} valueField={adValValue ? adValValue : 0} minValueField={0} onChangeValue={(e: any) => setAdValValue(e.target.value)} />
                <Line field={"DESPACHO"} valueField={despachoValue ? despachoValue : 0} minValueField={0} onChangeValue={(e: any) => setDespachoValue(e.target.value)} />
                <Line field={"PED 100KG"} valueField={pegadioValue ? pegadioValue : 0} minValueField={0} onChangeValue={(e: any) => setPegadioValue(e.target.value)} />
                <Line field={"CAM"} valueField={camValue ? camValue : 0} minValueField={0} onChangeValue={(e: any) => setCamValue(e.target.value)} />
            </div>
            <hr className="mt-8 border border-slate-400" />

            <div className="mt-8">
                <InputFile placeholder={"Anexar Arquivo"} text={"Anexar Arquivo"} onChange={handleFile} />
                <div className="flex w-72 bg-slate-200 p-1 rounded-md mt-2">
                    <div className="overflow-auto ContainerScrollHidden w-full">
                        <span>
                            {attachment.name}
                        </span>
                    </div>
                    <div className="flex">
                        <button onClick={() => setAttachment({} as File)}>
                            <AiFillCloseCircle className="mx-1 my-auto" size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex">
                <label className="w-11/12 overflow-x-auto">
                    {attachment.name}
                </label>
                <div className="flex justify-end my-auto w-1/12">
                    <button onClick={() => setAttachment({} as File)}>
                        <AiFillCloseCircle className="my-auto" size={20} />
                    </button>
                </div> */}
            {/* <button className="bg-black text-white rounded-md text-sm px-3 mt-6 hover:scale-95 transition-all duration-200 py-2" onClick={postForm}>
                Salvar Tudo
            </button> */}
        </div>
    )
}