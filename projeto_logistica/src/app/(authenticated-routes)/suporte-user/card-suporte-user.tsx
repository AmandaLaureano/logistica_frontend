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
                    <div key={index} className="bg-green-simple/10 rounded-xl py-4 px-4 shadow-lg shadow-black/20" >
                        <div className="grid grid-cols-2 grid-rows-1">
                            <div>
                                <p className="text-xl lg:text-2xl font-medium mt-5">{supportInfo.nome}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-stretch mb-2">
                                <BsWhatsapp className="fill-green-simple w-5 h-5 mr-2"/>
                                <p className="font-regular text-base"><b className="buttonGreenHover">Telefone:</b> {supportInfo.telefone}</p>
                            </div>
                            <div className="flex items-stretch mb-2">
                                <FiPhoneCall className="stroke-green-simple w-5 h-5 mr-2"/>
                                <p className="font-regular text-base"><b className="buttonGreenHover">Ramal:</b> {supportInfo.ramal}</p>
                            </div>
                            <div className="flex items-stretch mb-2">
                                <HiOutlineMail className="stroke-green-simple w-6 h-6 mr-1"/>
                                <p className="font-regular text-base"><b className="buttonGreenHover">E-mail:</b> {supportInfo.email}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>    
    )
}
