import { FormTax } from "./form"
import { BsCurrencyDollar } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
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
        <div className="bg-white-simple rounded-sm shadow-md shadow-black-gray-border mt-12">
            <div className="m-3 xmd:m-5 sm:m-7">
                <div className="w-full">
                    <div className="mb-12 w-full">
                        <div className="w-full flex justify-center py-10">
                            <LiaFileInvoiceDollarSolid className="hidden sm:flex fill-green-simple w-9 h-9 mx-2"/>
                            <p className="font-medium text-xl md:text-2xl">Generalidades</p>
                        </div>
                        <div className="w-full h-12">
                            <div className="flex w-full h-full text-xl my-auto">
                                <div className=" w-6/12 flex justify-start my-auto">
                                    <p className="flex justify-start text-sm xmd:text-base md:text-lg xl:text-xl font-medium">
                                        Componentes
                                    </p>
                                </div>
                                <div className="flex justify-evenly w-6/12 my-auto">
                                    <p className="flex sm:mr-8 text-sm xmd:text-base md:text-lg xl:text-xl font-medium h-full items-center">
                                        <BsCurrencyDollar className="hidden xmd:flex fill-green-simple w-6 h-5"/>Valor
                                    </p>
                                    <p className="flex sm:mr-2 text-sm xmd:text-base md:text-lg xl:text-xl font-medium h-full items-center">
                                        <BsCurrencyDollar className="hidden xmd:flex fill-green-simple w-6 h-5"/>Mínimo
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
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