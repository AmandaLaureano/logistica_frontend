import { SelectTransportadoras } from "../../components/selects";
import { api } from "../../services/api";
import { IArrayTransportadoras } from "../../interfaces/app/dashboard"
import { BsTruck } from "react-icons/bs"

export default async function Dashboard() {
    const getTransportadoras = await api.get(`/transportadoras`)
        .then(resp => {
            return resp.data
        }).catch(err => {
            console.log(err)
            return []
        })
        console.log(getTransportadoras)

    const transportadoras: Array<IArrayTransportadoras> = getTransportadoras

    return (
        <div className="2xl:px-12 mt-24 h-full">
            <div className="w-full pb-12 bg-white-simple shadow-md shadow-black-gray-border rounded-md">
                <div className="flex items-stretch justify-center pt-5">
                    <BsTruck className="flex self-center fill-green-simple w-11 h-11 mt-1"/>
                    <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-center p-4 pt-6">
                        Selecione uma transportadora
                    </p>
                </div>    
                <div className="flex justify-center pt-12">
                    <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
