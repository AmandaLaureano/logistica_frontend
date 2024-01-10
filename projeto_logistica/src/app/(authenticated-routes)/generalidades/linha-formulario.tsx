import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";

export default function Linha({ nomeImposto, infoImposto, valorImposto, onChangeValue, children}: ILinhaFormulario,) {

    return (
        <div className="w-full border-b border-green-simple/20 h-12">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-sm md:text-base my-auto">
                <div className="w-6/12 flex justify-start items-center my-auto">
                    <span className="flex mx-3 text-xs sm:text-sm font-medium">
                        {nomeImposto}
                    </span>
                    <span className="hidden sm:flex text-xs font-medium text-green-simple truncate">
                        {infoImposto}
                    </span>
                </div>
                <div className="flex justify-end w-6/12 my-1 space-x-2 sm:space-x-10 mx-2">
                    <div className="flex items-stretch bg-white-normal rounded-md">
                        <span className="flex items-center ml-2">
                            {children}
                        </span>
                        <input
                            placeholder="0"
                            type="number"
                            className="outline-none w-16 flex text-center mx-1 cursor-pointer bg-white-normal"
                            onChange={(e) => onChangeValue(e.target.value)}
                            value={valorImposto}
                        >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}