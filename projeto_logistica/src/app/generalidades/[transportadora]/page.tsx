import { BsArrowLeft } from "react-icons/bs";
import { FormTax } from "@/src/components/pages/generalidades/form";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { api } from "@/src/services/api";
import { ITaxForms } from "@/src/interfaces/app/generalidades";

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
        <div className="">
            <div className="w-11/12 m-auto mt-6">
                <h1 className="flex text-2xl my-auto">
                    <button>
                        <BsArrowLeft size={30} className="mr-4" />
                    </button>
                    Generalidades Gobor
                </h1>
                <div className="w-full mt-6">
                    <div>
                        <div className="w-full border-b-2 border-slate-400 h-12">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className="pl-4 w-6/12 flex justify-start my-auto">
                                    <span className="flex justify-start">
                                        Componentes
                                    </span>
                                </div>
                                <div className="flex justify-evenly w-6/12 my-auto">
                                    <span className="flex">
                                        <AiFillEdit className="mr-2" />valor
                                    </span>
                                    <span className="flex">
                                        <AiFillEdit className="mr-2" /> minímo
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FormTax
                                adVal={TaxForms.adVal}
                                cam={TaxForms.cam}
                                despacho={TaxForms.despacho}
                                gris={TaxForms.gris}
                                pegadio={TaxForms.pegadio}
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