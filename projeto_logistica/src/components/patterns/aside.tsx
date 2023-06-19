
import { BsChevronCompactDown } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi"
import Link from "next/link";
import { version } from "../../../package.json";
import { TbHomeEco } from "react-icons/tb"
import { VscFileSubmodule} from "react-icons/vsc"

export default function Aside(props: any){
    return(
        <aside className="h-full w-[280px] bg-black-light shadow-md shadow-black-light fixed">
            <div className="flex flex-col px-5 mt-12">
                <div className="flex pb-8">
                    <TbHomeEco className="iconClass w-7 h-7 stroke-white"/>
                    <Link className="" href='/'>
                        <button className="px-2 h-full">
                            <p className="botaoAside font-medium h-full pt-1 text-white xl:text-md tracking-widest">Tela inicial</p>
                        </button>
                    </Link>
                </div>
                <div className="flex pb-8">
                    <VscFileSubmodule className="w-7 h-6 fill-white stroke-white"/>
                    <div className=" px-2">
                        <p className="botaoAside font-medium h-full text-white xl:text-md tracking-widest">Arquivos gerados</p>
                    </div>
                    <button className="" onClick={props.onClick}>
                        <BsChevronCompactDown className=' flex self-end w-6 h-5 fill-white stroke-white'/>
                    </button>
                </div>
                <div className="flex pb-8">
                    <TfiHeadphoneAlt className="w-7 h-6 fill-white stroke-white"/>
                    <Link href='/suporte'>
                        <button className="px-2">
                            <p className="botaoAside font-medium h-full text-white pt-1 xl:text-md tracking-widest">Suporte</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center w-full items-center h-full">
                <span className='text-sm text-green-simple tracking-widest'>Version {version}</span>
            </div>
        </aside>
    )
}