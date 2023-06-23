import { TfiHeadphoneAlt } from "react-icons/tfi"
import { SupportCard } from "./cardSuporte"

export default function Suporte(){
    return(
        <div className="m-auto mt-24 h-full">
            <div className="w-11/12 bg-white-simple shadow-md shadow-black-gray-border m-auto h-[50%] pb-16 rounded-md ">
                <div className="flex items-stretch justify-center pt-12">
                    <TfiHeadphoneAlt className="fill-green-simple w-9 h-9 mx-3"/>
                    <p className="tracking-widest text-xl lg:text-2xl xl:text-3xl font-medium text-center">Suporte</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-16 mt-10">
                    <SupportCard 
                    nome="Fulano"
                    telefone="(42) 99999-9999"
                    ramal="8596"
                    email="fulano@pormade.com.br"
                    />
                    <SupportCard 
                    nome="Fulano"
                    telefone="(42) 99999-9999"
                    ramal="8596"
                    email="fulano@pormade.com.br"
                    />
                    <SupportCard 
                    nome="Fulano"
                    telefone="(42) 99999-9999"
                    ramal="8596"
                    email="fulano@pormade.com.br"
                    />
                    <SupportCard 
                    nome="Fulano"
                    telefone="(42) 99999-9999"
                    ramal="8596"
                    email="fulano@pormade.com.br"
                    />
                </div>  
            </div>
        </div>
    )
}