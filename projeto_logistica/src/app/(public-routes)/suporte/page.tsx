'use client'
import { api } from "@/src/services/api"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { ISupportCard, SupportCard } from "./card-suporte"
import NavbarSuporte from "./navbar-suporte"


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
        <main className="flex flex-col h-screen bg-black-light justify-center place-content-center">
            {/*<div className="absolute inset-x-0 top-0 ">
                <NavbarSuporte/>
            </div>*/}
            <section className="loginSection place-self-center bg-black shadow-md shadow-light-gray/25 w-9/12 h-9/12 rounded-lg my-12">
                <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-10">
                    <SupportCard ArraySuporte={support}/>
                </div> 
            </section>    
        </main>
    )
}