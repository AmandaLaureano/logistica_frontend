
interface IButtonDefault {
    children: React.ReactNode,
    background?: string,
    onClick?: () => void
}

export function ButtonDefault({ background,children, onClick}: IButtonDefault) {
    return (
        <button 
            className={`bg-${background} outline-none hover:scale-95 transition-all duration-200 text-white p-1 rounded-md shadow-md shadow-black/50`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}