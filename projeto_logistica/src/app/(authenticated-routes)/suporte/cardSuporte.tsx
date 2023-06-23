import { BsWhatsapp } from "react-icons/bs"

interface ISupportCard {
    onClick?(): void | React.MouseEventHandler<HTMLButtonElement>
    nome: string
    telefone: string
    ramal: string
    email: string
}

export function SupportCard({ onClick, nome, telefone, ramal, email  }: ISupportCard) {
    return (
        <div className="bg-white rounded-xl py-4 px-4 shadow-lg shadow-black/20">
            <div className="grid grid-cols-2 grid-rows-1">
                <div>
                    <p className="text-2xl font-medium">{nome}</p>
                </div>
                <div className="flex justify-end">
                    <BsWhatsapp className="fill-green-simple w-7 h-7"/>
                </div>
            </div>
            <div className="mt-4">
                <div className="mb-2">
                    <p className="font-medium text-base">Telefone: {telefone}</p>
                </div>
                <div className="mb-2">
                    <p className="font-medium text-base">Ramal: {ramal}</p>
                </div>
                <div className="mb-2">
                    <p className="font-medium text-base">E-mail: {email}</p>
                </div>
            </div>
        </div>
    )
}
