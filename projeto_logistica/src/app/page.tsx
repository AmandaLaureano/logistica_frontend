import Aside from "@components/patterns/aside";
import Navbar from "@components/patterns/navbar";
import { SelectTransportadoras } from "../components/selects";

export default async function Dashboard() {
    const baseUrl = "http://localhost:3000"
    const responseTransportadoras = await fetch(`${baseUrl}/transportadoras`)

    const transportadoras:Array<IArrayTransportadoras> = await responseTransportadoras.json()

    return (
        <div className="conteudoTotal grid justify-items-stretch h-full bg-white">
            <div className="containerCabecalho z-30 flex flex-wrap w-full h-[90px]">
                <Navbar />
            </div>
            <div className="containerMenuLateral z-20 flex items-end fixed h-full w-[300px]">
                <Aside />
            </div>
            <div className="containerConteudoHome z-10 grid justify-self-end w-full h-full bg-white">
                <div className="conteudoTransportadoras bg-light-gray ml-80 mt-28 place-self-center h-[500px] w-[50%] rounded-xl border-[1px] border-black-gray-border">
                    <div className="containerTitulo flex justify-center pt-14">
                        <h1 className="text-3xl font-medium">Selecione uma Transportadora</h1>
                    </div>
                    <div className="containerDropdown flex justify-center h-fit pt-12">
                        <SelectTransportadoras ArrayTransportadoras={transportadoras} />
                    </div>
                </div>
            </div>
        </div>
    )
}    
