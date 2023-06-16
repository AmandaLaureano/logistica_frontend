import { Children } from "react";

interface IButtonDefault {
    children: React.ReactNode,
    background?: string,
    width?: string
    onClick?: () => void
}

export function ButtonDefault({ background, width, children, onClick }: IButtonDefault) {
    return (
        <button
            className={`bg-${background} hover:scale-95 transition-all duration-200 w-${[width]} text-white py-2 px-4 rounded-md shadow-md shadow-black/50`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}