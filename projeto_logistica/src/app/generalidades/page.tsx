import { BsArrowLeft } from "react-icons/bs";
import { FormTax } from "./form"
import { AiFillEdit } from "react-icons/ai";

export default async function Generalidades() {
    const baseUrl = "http://192.168.50.100:3000"
    // const responseForms = await fetch(`${baseUrl}/impostos/1`)

    // const TaxForms: ITaxForms = await responseForms.json()

    return (
        <div className="">
            <div className="w-11/12 m-auto mt-6">
                <h1 className="flex text-2xl my-auto">
                    <BsArrowLeft size={30} className="mr-4" />
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
                            <FormTax />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}