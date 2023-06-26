import { BsWhatsapp } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

export interface ISupportCard {
    id: number,
    nome: string
    telefone: string
    ramal: string
    email: string
}

export function SupportCard({ ArraySuporte }: any) {
    return (
        <>
            {ArraySuporte.map((supportInfo: any, index: number) => {
                return(
                    <div key={index} className="bg-white-simple rounded-xl py-4 px-5 shadow-md shadow-white/20" >
                        <div className="grid grid-cols-2 grid-rows-1">
                            <div>
                                <p className="text-2xl font-medium">{supportInfo.nome}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-stratch mb-2">
                                <h1 className="font-medium text-base mr-2"><b className="buttonGreenHover">Telefone:</b> {supportInfo.telefone}</h1>
                                <BsWhatsapp className="fill-green-simple w-5 h-5"/>
                            </div>
                            <div className="flex items-stratch mb-2">
                                <h1 className="font-medium text-base mr-2"><b className="buttonGreenHover">Ramal:</b> {supportInfo.ramal}</h1>
                                <FiPhoneCall className="stroke-green-simple w-5 h-5"/>
                            </div>
                            <div className="flex items-stretch mb-2">
                                <h1 className="font-medium text-base mr-2"><b className="buttonGreenHover">E-mail:</b> {supportInfo.email}</h1>
                                <HiOutlineMail className="stroke-green-simple w-6 h-6"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>    
    )
}
