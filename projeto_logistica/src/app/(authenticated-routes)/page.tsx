import { SelectTransportadoras } from "../../components/selects";
import { api } from "../../services/api";
import { ITransportadoras } from "../../interfaces/app/dashboard"
import { PiTruck } from "react-icons/pi"

export default async function Dashboard() {
    const getTransportadoras = await api.get(`http://192.168.155.22:3000/transportadora`)
        .then(resp => {
            return resp.data
        }).catch(err => {
            console.log(err)
            return []
        })

    const transportadoras: Array<ITransportadoras> = getTransportadoras
    
    return (
        <div className="2xl:px-12 mt-24 h-full">
            <div className="w-full pb-12 bg-white-simple shadow-md shadow-black-gray-border rounded-md">
                <div className="flex items-stretch justify-center pt-5">
                    <PiTruck className="hidden md:flex self-center fill-green-simple md:w-9 md:h-9 lg:w-11 lg:h-11"/>
                    <p className="font-medium text-xl sm:text-2xl lg:text-3xl text-center p-2 xmd:p-3 sm:p-4 pt-6">
                        Selecione uma transportadora
                    </p>
                </div>    
                <div className="flex justify-center pt-8">
                    <SelectTransportadoras Transportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
