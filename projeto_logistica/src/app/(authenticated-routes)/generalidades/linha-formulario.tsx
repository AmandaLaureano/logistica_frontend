import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";

export default function Linha({ nomeImposto, valorImposto, onChangeValor}: ILinhaFormulario) {
    return (
        <div className="w-full border-b-[1px] border-gray-line h-16">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-sm md:text-base my-auto">
                <div className="w-6/12 flex justify-start my-auto">
                    <span className="flex text-xs sm:text-sm font-medium">
                        {nomeImposto}
                    </span>
                </div>
                <div className="flex justify-start w-6/12 my-auto space-x-2 sm:space-x-10">
                    <input type="number" className="ml-5 bg-slate-100 w-10 sm:w-16 lg:w-20 p-1 rounded-md outline-none" value={valorImposto} onChange={onChangeValor}/>
                </div>
            </div>
        </div>
    )
}