import { ILinhaFormulario } from "@/src/interfaces/app/generalidades";
import { useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import { NumericFormat, NumericFormatProps } from "react-number-format";

export default function Linha({ nomeImposto, infoImposto, valorImposto, onChangeValue}: ILinhaFormulario, {...props}: NumericFormatProps) {

    const [value, setValue] = useState<any>();

    const handleChange = (v: any) => {
        
        setValue(parseFloat(v.value) * 100);
        if (onChangeValue) {
            onChangeValue({ ...v, floatValue: v.floatValue / 100 });
        }
    };

    const currencyFormatter = (formatted_value: any) => {
        // Set to 0,00 when "" and divide by 100 to start by the cents when start typing
        if (!Number(formatted_value)) return "R$ 0,00";
        const br = { style: "currency", currency: "BRL" };
        return new Intl.NumberFormat("pt-BR", br).format(formatted_value / 100);
    };

    const keyDown = (e: any) => {
        //This if keep the cursor position on erase if the value is === 0
        if (e.code === "Backspace" && !value) {
        e.preventDefault();
        }
        // This if sets the value to 0 and prevent the default for the cursor to keep when there's only cents
        if (e.code === "Backspace" && value < 1000) {
        e.preventDefault();
        setValue(0);
        }
    };

    return (
        <div className="w-full border-b-[1px] border-gray-line h-12 lg:h-14">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-sm md:text-base my-auto">
                <div className="w-6/12 flex justify-start items-center my-auto">
                    <span className="flex mx-3 text-xs sm:text-sm font-medium ">
                        {nomeImposto}
                    </span>
                    <span className="hidden sm:flex text-xs font-medium text-green-simple truncate">
                        {infoImposto}
                    </span>
                </div>
                <div className="flex justify-end w-6/12 my-auto space-x-2 sm:space-x-10 mx-2">
                    <NumericFormat
                    className="hover shadow-inner text-center shadow-black-light/30 text-sm lg:text-lg bg-slate-100 w-14 xmd:w-20 p-2 rounded-md outline-none cursor-pointer"
                    {...props}
                    onChange={onChangeValue}
                    renderText={(formattedValue: string) => currencyFormatter(formattedValue)}
                    onValueChange={handleChange}
                    value={Number(valorImposto) / 100}
                    decimalSeparator=","
                    thousandSeparator="."
                    decimalScale={2}
                    onKeyDown={keyDown}
                    />
                </div>
            </div>
        </div>
    )
}