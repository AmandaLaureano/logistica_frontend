import { SelectTransportadoras } from "../components/selects";
import { revalidateTag } from 'next/cache'
import { api } from "../services/api";
import { IArrayTransportadoras } from "../interfaces/app/dashboard";

export default async function Dashboard() {
    const getTransportadoras = await api.get(`/transportadoras`,)
        .then(resp => {
            return resp.data
        }).catch(err => {
            console.log(err)
            return []
        })

    const transportadoras: Array<IArrayTransportadoras> = getTransportadoras

    return (
        <div className=" m-auto mt-24">
            <div className="w-11/12 lg:w-8/12 shadow-md shadow-gray-shadow m-auto bg-white-gray pb-10 rounded-lg">
                <p className="text-3xl font-medium text-center pt-12 px-40 tracking-widest">
                    Selecione uma transportadora
                </p>
                <div className="flex justify-center pt-12">
                    <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
