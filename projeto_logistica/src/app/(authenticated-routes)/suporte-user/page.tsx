'use client'
import { api } from "@/src/services/api"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { ISupportCard, SupportCard } from "./card-suporte-user"


export default async function Suporte(){
    const getInfoSupport = await api.get("http://localhost:3001/contatosSuporte")
    .then(resp => {
        return resp.data
    }).catch(err => {
        console.log(err)
        return []
    })
    

    const support: Array<ISupportCard> = getInfoSupport
     
    return(
        <div className="2xl:px-12 mt-24 h-full">
            <div className="w-full bg-white-simple shadow-md shadow-black-gray-border h-[50%] pb-16 rounded-md">
                <div className="flex items-stretch justify-center pt-12">
                    <TfiHeadphoneAlt className="fill-green-simple w-9 h-9 mx-3"/>
                    <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-center">Suporte</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-16 mt-10">
                    <SupportCard ArraySuporte={support}/>
                </div> 
            </div>
        </div>
    )
}