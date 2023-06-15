import { SelectTransportadoras } from "../components/selects";
import { revalidateTag } from 'next/cache'

export default async function Dashboard() {
    const getTransportadoras = await fetch(`http://localhost:3001/transportadoras`,
        {
            next: {
                revalidate: 10,
            }
        })
        .then(response => {
            return response.json()
        }).catch(() => {
            return []
        })

    const transportadoras: Array<IArrayTransportadoras> = await getTransportadoras

    return (
        <div className="flex justify-center m-auto mt-24">
            <div className=" bg-light-gray pb-10 rounded-xl border border-black-gray-border">
                <div className="flex justify-center pt-5">
                    <h1 className="text-3xl font-medium text-center p-4 px-40">
                        Selecione uma Transportadora
                    </h1>
                </div>
                <div className="flex justify-center pt-12">
                    <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
