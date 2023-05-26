import { BsChevronCompactDown } from "react-icons/bs"
import { tSubcategoriaTransportadoras } from "../types/types"

export default function DropdownTransportadoras (props:any){
    
    return(
        <div className="conteudoDropdown flex items-center place-content-center bg-black w-[380px] h-[60px] rounded-md">
            <div className="">
                <p className="text-white text-2xl font-medium tracking-widest">Transportadoras</p>
            </div>    
            <div className='containerLinhaDivisao rotate-90'>
                <hr className='bg-white w-8 border-white border-[1]'/>
            </div>
            <button className="ml-3" onClick={props.onClick}>
                <BsChevronCompactDown className='flex self-end w-10 h-8 fill-white stroke-white'/>
            </button>
        </div>
    )
}