import { Children } from "react";

interface IButtonDefault{
    children: React.ReactNode,
    background?: string,
    width?:string
}

export function ButtonDefault({background,width,children}:IButtonDefault){
    return(
        <button className={`bg-${background} hover:scale-95 transition-all duration-200 w-${[width]} text-white py-2 px-4 rounded-md`}>
            {children}
        </button>
    )
}