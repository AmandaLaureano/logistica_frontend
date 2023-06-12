import { SelectTransportadoras } from "../components/selects";

export default async function Dashboard() {
    const baseUrl = "http://localhost:3000"
    const responseTransportadoras = await fetch(`${baseUrl}/transportadoras`)

    const transportadoras: Array<IArrayTransportadoras> = await responseTransportadoras.json()

    return (
        <div className="flex justify-center m-auto mt-24">
            <div className=" bg-light-gray pb-10 rounded-xl border border-black-gray-border">
                <div className="flex justify-center pt-5">
                    <h1 className="text-3xl font-medium text-center p-4">
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
