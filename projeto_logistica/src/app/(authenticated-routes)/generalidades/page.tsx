import { BsArrowLeft } from "react-icons/bs";
import { FormTax } from "./form"
import { AiFillEdit } from "react-icons/ai";
import { api } from "@/src/services/api";
import { ITaxForms } from "@/src/interfaces/app/generalidades";
import Link from "next/link"

export default async function Generalidades() {

    const responseForms = await api.get("/impostos/1")
        .then(resp => {
            console.log(resp.data)
            return resp.data
        })
        .catch(err => {
            console.log(err.message)
            return 0
        })

    const TaxForms: ITaxForms = responseForms

    return (
        <div className="bg-white-simple rounded-sm shadow-md shadow-black-gray-border">
            <div className="w-11/12 m-auto mt-20">
                <div className="w-full">
                    <div className="mb-12">
                        <div className="w-full flex justify-center py-16">
                            <p className="font-medium text-3xl my-auto">Generalidades</p>
                        </div>
                        <div className="w-full h-12">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className=" w-6/12 flex justify-start my-auto">
                                    <p className="flex justify-start text-2xl">
                                        Componentes
                                    </p>
                                </div>
                                <div className="flex justify-evenly w-6/12 my-auto">
                                    <p className="flex text-xl h-full items-center">
                                        <AiFillEdit className="mr-2 fill-green-simple" />Valor
                                    </p>
                                    <p className="flex text-xl h-full items-center">
                                        <AiFillEdit className="mr-2 fill-green-simple" /> Minímo
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FormTax
                                adVal={TaxForms.adVal}
                                cam={TaxForms.cam}
                                despacho={TaxForms.despacho}
                                gris={TaxForms.gris}
                                pedagio={TaxForms.pedagio}
                                tda={TaxForms.tda}
                                trt={TaxForms.trt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}