import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsChevronCompactDown } from "react-icons/bs";
import { IoReceiptSharp } from "react-icons/io5"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import Link from "next/link";
import { version } from "../../../package.json";

export default function Aside(props: any){
    return(
        <aside className="h-full w-[270px] bg-black-light shadow-md shadow-black-light fixed">
            <div className="flex flex-col px-5 mt-12">
                <div className="flex pb-8">
                    <FaHome className="w-7 h-7 fill-white"/>
                    <Link href='/'>
                        <button className="px-2">
                            <p className="text-white xl:text-lg tracking-widest">Tela inicial</p>
                        </button>
                    </Link>
                </div>
                <div className="flex pb-8">
                    <IoReceiptSharp className="w-7 h-6 fill-white stroke-white"/>
                    <div className="px-2">
                        <p className="text-white xl:text-lg tracking-widest">Arquivos gerados</p>
                    </div>
                    <button onClick={props.onClick}>
                        <BsChevronCompactDown className='flex self-end w-6 h-5 fill-white stroke-white'/>
                    </button>
                </div>
                <div className="flex pb-8">
                    <TfiHeadphoneAlt className="w-7 h-6 fill-white stroke-white"/>
                    <Link href='/suporte'>
                        <button className="px-2">
                            <p className="text-white xl:text-lg tracking-widest">Suporte</p>
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