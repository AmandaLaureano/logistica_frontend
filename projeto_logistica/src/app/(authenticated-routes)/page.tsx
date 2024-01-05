import { SelectTransportadoras } from "../../components/selects";
import { api } from "../../services/api";
import { ITransportadoras } from "../../interfaces/app/dashboard"

export default async function Dashboard() {
    const getTransportadoras = await api.get(`/transportadora`)
        .then(resp => {
            return resp.data
        }).catch(err => {
            console.log(err)
            return []
        })
        
        const listaTransportadoras: Array<ITransportadoras> = getTransportadoras
    
    return (
        <div className="px-5 sm:px-10 2xl:px-12 mt-24 h-full">
            <div className="w-full pb-12 bg-white-simple shadow-md shadow-black-gray-border rounded-md px-3 xmd:px-5">
                <div className="flex justify-center flex-col pt-5">
                    <p className="font-medium text-xl xmd:text-2xl md:text-3xl lg:text-4xl text-center sm:p-4 py-4 sm:py-6">
                        Processar arquivos de transportadoras
                    </p>
                    <h1 className="px-2 xmd:px-3 sm:px-4 text-center font-medium text-sm md:text-base lg:text-lg">
                        Escolha uma transportadora abaixo para realizar os cálculos de acordo com FRETEFY e VTEX 
                    </h1>
                </div>    
                <div className="flex justify-center pt-8">
                    <SelectTransportadoras transportadoras={listaTransportadoras} />
                </div>
            </div>
        </div>
    )
}    
