'use client'
import Aside from "../components/aside";
import DropdownTransportadoras from "../components/dropdown_transportadoras";
import Navbar from "../components/navbar";

export default function Dashboard(){
    return(
        <div className="conteudoTotal grid justify-items-stretch h-full bg-white">
            <div className="containerCabecalho z-30 flex flex-wrap w-full h-[90px]">
                <Navbar/>
            </div>
            <div className="containerMenuLateral z-20 flex items-end fixed h-full w-[300px]">
                <Aside/>
            </div>
            <div className="containerConteudoHome z-10 grid justify-self-end w-full h-full bg-white">
                <div className="conteudoTransportadoras bg-light-gray ml-80 mt-28 place-self-center h-[500px] w-[50%] rounded-xl border-[1px] border-black-gray-border">
                    <div className="containerTitulo flex justify-center pt-14">
                        <h1 className="text-3xl font-medium">Selecione uma Transportadora</h1>
                    </div>
                <div className="containerDropdown flex justify-center h-fit pt-12">
                    <DropdownTransportadoras/>
                </div>
                </div>
            </div>
        </div> 
    )
}    
