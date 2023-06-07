import Aside from "@components/patterns/aside";
import Navbar from "@components/patterns/navbar";
import { SelectTransportadoras } from "../components/selects";

export default async function Dashboard() {
    const baseUrl = "http://localhost:3000"
    const responseTransportadoras = await fetch(`${baseUrl}/transportadoras`)

    const transportadoras: Array<IArrayTransportadoras> = await responseTransportadoras.json()

    return (
        <div className="z-10 grid justify-self-end w-full h-full ">
            <div className=" bg-light-gray ml-80 mt-28 place-self-center pb-10 w-[50%] rounded-xl border-[1px] border-black-gray-border">
                <div className="flex justify-center pt-14">
                    <h1 className="text-3xl font-medium">Selecione uma Transportadora</h1>
                </div>
                <div className="containerDropdown flex justify-center h-fit pt-12">
                    <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                </div>
            </div>
        </div>
    )
}    
