import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";

export default function Linha({ nomeImposto, infoImposto,  valorImposto, onChangeValue}: ILinhaFormulario) {
    return (
        <div className="w-full border-b-[1px] border-gray-line h-14">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-sm md:text-base my-auto">
                <div className="w-6/12 flex justify-start items-center my-auto">
                    <span className="flex mx-3 text-xs sm:text-sm font-medium ">
                        {nomeImposto}
                    </span>
                    <span className="flex text-xs font-medium text-green-simple truncate">
                        {infoImposto}
                    </span>
                </div>
                <div className="flex justify-end w-6/12 my-auto space-x-2 sm:space-x-10 mx-3">
                    <input type="number" className="shadow-inner shadow-black-light/30 bg-slate-100 w-10 xmd:w-16 lg:w-20 p-1 rounded-md outline-none" value={valorImposto} onChange={onChangeValue}/>
                </div>
            </div>
        </div>
    )
}