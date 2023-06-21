import { SelectTransportadoras } from "../../components/selects";
import { api } from "../../services/api";
import { IArrayTransportadoras } from "../../interfaces/app/dashboard"

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
        <div className="m-auto mt-24 h-screen">
            <div className="w-11/12 shadow-md shadow-black-gray-border lg:w-8/12 m-auto h-[50%] bg-light-gray pb-10 rounded-md ">
                <div className="flex justify-center pt-5">
                    <p className="tracking-widest text-xl lg:text-2xl xl:text-3xl font-medium text-center p-4 pt-12">
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
