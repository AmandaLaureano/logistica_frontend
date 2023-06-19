import { SelectTransportadoras } from "../components/selects";
import { revalidateTag } from 'next/cache'
import { api } from "../services/api";
import { IArrayTransportadoras } from "../interfaces/app/dashboard";

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
        <div className="m-auto mt-24">
            <div className="w-11/12 lg:w-8/12 m-auto bg-light-gray pb-10 rounded-xl border border-black-gray-border">
                <div className="flex justify-center pt-5">
                    <h1 className="tracking-widest text-xl lg:text-2xl xl:text-3xl font-medium text-center p-4 ">
                        Selecione uma transportadora
                    </h1>
                </div>    
                <div className="flex justify-center pt-8">
                    <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
