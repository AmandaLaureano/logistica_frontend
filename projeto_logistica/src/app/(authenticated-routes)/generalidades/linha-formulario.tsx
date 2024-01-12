import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";
import { reais, porcentagem } from './masks'
import { useCallback } from "react";

export default function Linha({ nomeImposto, infoImposto, valorImposto, onChange, children, mask, placeholder}: ILinhaFormulario,) {

    const handleKeyUp = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            if(mask === "reais"){
                reais(e)
            }
            else if(mask === "porcentagem"){
                porcentagem(e)
            }
        }, [mask]
    )

    return (
        <div className="w-full border-b border-green-simple/20 h-14">
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
                        <input
                            placeholder={placeholder}
                            onKeyUp={handleKeyUp}
                            className="outline-none w-16 flex text-start cursor-pointer bg-white-normal ml-3"
                            onChange={(e) => onChange(e.target.value)}
                            value={valorImposto}
                        >
                        </input>
                        <div className="flex items-center mx-2">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}