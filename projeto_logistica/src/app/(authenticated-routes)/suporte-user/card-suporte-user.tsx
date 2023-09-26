import { BsWhatsapp } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { BsSend} from "react-icons/bs"
import Link from "next/link"

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
                        <div className="my-3">
                            <p className="text-lg md:text-xl lg:text-2xl font-medium">{supportInfo.nome}</p>
                        </div>
                        <div className="mt-4">
                            <div className="mb-2">
                                <Link className="flex items-stretch" href={`https://wa.me/55${supportInfo.telefone}`}>
                                    <BsWhatsapp className="hidden xmd:flex fill-green-simple w-5 h-5 mr-2"/>
                                    <p className="font-regular text-base"><b className="buttonGreenHover">Telefone:</b> {supportInfo.telefone}</p>
                                </Link>
                            </div>
                            <div className="flex items-stretch mb-2">
                                <FiPhoneCall className="hidden xmd:flex stroke-green-simple w-5 h-5 mr-2"/>
                                <p className="font-regular text-base"><b className="buttonGreenHover">Ramal:</b> {supportInfo.ramal}</p>
                            </div>
                            <div className="flex items-stretch mb-2">
                                <BsSend className="hidden xmd:flex fill-green-simple w-5 h-5 mr-2"/>
                                <p className="font-regular text-base truncate"><b className="buttonGreenHover">E-mail:</b> {supportInfo.email}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>    
    )
}
