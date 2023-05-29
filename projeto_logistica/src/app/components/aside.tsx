import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsChevronCompactDown } from "react-icons/bs";
import { IoReceiptSharp } from "react-icons/io5"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import Link from "next/link";

export default function Aside(props: any){
    return(
        <aside className="containerAside grid fixed w-[300px] h-full bg-black-light">
            <div className="containerBotoesMenu flex flex-col pt-32 px-6">
                <div className="containerSetaFechaMenu pb-8">
                    <button>
                        <BsArrowLeft className="w-7 h-10 fill-white stroke-white"/>
                    </button>
                </div>
                <div className="containerBotaoHome flex pb-8">
                    <FaHome className="w-8 h-8 fill-white"/>
                    <Link href='/dashboard'>
                        <button className="px-3">
                            <p className="text-white text-xl">Dashboard</p>
                        </button>
                    </Link>
                </div>
                <div className="containerBotaoUltimosArquivos flex pb-8">
                    <IoReceiptSharp className="w-8 h-7 fill-white stroke-white"/>
                    <div className="px-3">
                        <p className="text-white text-xl">Últimos arquivos</p>
                    </div>
                    <button onClick={props.onClick}>
                        <BsChevronCompactDown className='flex self-end w-6 h-5 fill-white stroke-white'/>
                    </button>
                </div>
                <div className="containerBotaoSuporte flex pb-8">
                    <TfiHeadphoneAlt className="w-8 h-7 fill-white stroke-white"/>
                    <Link href='/suporte'>
                        <button className="px-3">
                            <p className="text-white text-xl">Suporte</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="containerVersao flex justify-center w-full h-full items-end pb-5">
                <span className='text-gray h-fit tracking-widest'>Version 0.0.1</span>
            </div>
        </aside>
    )
}