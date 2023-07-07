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
        <div className="mt-24 h-full flex justify-center place-content-center">
            <div className="w-full bg-white-simple shadow-sm shadow-black-gray-border h-[50%] pb-16 rounded-md">
                <div className="flex items-stretch justify-center pt-12">
                    <TfiHeadphoneAlt className="fill-green-simple w-9 h-9 mx-3"/>
                    <p className="text-2xl xl:text-3xl font-medium text-center">Suporte</p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 mx-16 mt-10">
                    <SupportCard ArraySuporte={support}/>
                </div> 
            </div>
        </div>
    )
}