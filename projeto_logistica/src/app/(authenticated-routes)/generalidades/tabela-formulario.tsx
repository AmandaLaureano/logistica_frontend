'use client'
import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";
import { ValorInteiro, ValorDecimal } from './masks'
import { useCallback } from "react";
import { Tooltip } from "@mui/material";
import { PiQuestion } from "react-icons/pi";

export default function TabelaFormulario({ nomeImposto, infoImposto, valorImposto, onChange, children, mask, placeholder, invalidField}: ILinhaFormulario,) {

    const handleKeyUp = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            let newValue = e.currentTarget.value

            if(mask === "reais"){
                newValue = ValorDecimal(e)
            }
            else if(mask === "dias"){
                newValue = ValorInteiro(e)
            }
            
            onChange(newValue)

        }, [mask, onChange]
    )

    return (
        <div className={` ${invalidField ? 'border-y border-red/30':'border-b border-green-simple/20'} w-full h-14`}>
            <div className={`flex ${invalidField ? 'bg-red/20':' hover:bg-green-simple/20'} transition-all duration-500 w-full h-full text-sm md:text-base my-auto`}>
                <div className="w-6/12 flex justify-start items-center my-auto">
                    {infoImposto !== "" ? (
                        <Tooltip title={infoImposto} placement="top" arrow>
                            <button >
                                <PiQuestion className="w-5 h-5 fill-green-simple stroke-2 stroke-green-simple"/>
                            </button>
                        </Tooltip>
                    ): ""}
                    <span className="flex mx-1 text-xs sm:text-sm font-medium w-fit">
                        {nomeImposto}
                    </span>
                </div>
                <div className="flex justify-end w-6/12 my-1 space-x-2 sm:space-x-10 mx-2">
                    <div className={`flex items-stretch bg-white rounded-md`}>
                        <input
                            
                            placeholder={placeholder}
                            onKeyUp={handleKeyUp}
                            className={`outline-none w-16 flex my-2 text-start cursor-pointer bg-white ml-3`}
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