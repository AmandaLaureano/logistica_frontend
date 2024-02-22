import { api } from "../../services/api";
import { ITransportadoras } from "../../interfaces/app/dashboard"
import { Combobox } from "../../components/combo-box";

export default async function Dashboard() {
    const getTransportadoras = await api.get(`/transportadora`)
        .then(resp => {
            console.log(resp.data)
            return resp.data

        }).catch(err => {
            console.log(err)
            return []
        })
        
        const listaTransportadoras: Array<ITransportadoras> = getTransportadoras
        
    return (
        <div className="grid">
            <div className="justify-self-center rounded-sm shadow-md shadow-black-gray-border my-20 w-11/12 lg:w-2/3">
                <div className="w-full pb-12 bg-white-normal/50 rounded-md px-3 xmd:px-5">
                    <div className="flex justify-center flex-col pt-5">
                        <p className="font-medium text-xl md:text-2xl 2xl:text-3xl text-center sm:p-4 py-4 sm:py-6">
                            Processar arquivos de transportadoras
                        </p>
                        <h1 className="px-2 xmd:px-3 sm:px-4 text-center font-medium text-sm md:text-base 2xl:text-lg">
                            Escolha uma transportadora abaixo para realizar o processamento de arquivos de acordo com os modelos <span className="font-bold text-green-simple">FRETEFY e VTEX</span>
                        </h1>
                    </div>
                    <div className="flex justify-center pt-8">
                        <Combobox transportadoras={listaTransportadoras}/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}    
