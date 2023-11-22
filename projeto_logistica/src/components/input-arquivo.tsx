
interface IInputArquivo {
    placeholder?: string
    onClick?(): void | React.MouseEventHandler<HTMLButtonElement>
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    accept?: string
    texto: string
}

export function InputArquivo({ placeholder, onClick, onChange, accept, texto }: IInputArquivo) {
    return (
        <div className="w-full h-fit bg-black/50 shadow-inner shadow-black-light/30 text-white rounded-sm lg:text-lg px-5 py-1 hover:scale-95 transition-all duration-200">
            <div>
                <input type='file' placeholder={placeholder} onClick={onClick} onChange={onChange} multiple={false} readOnly
                className='hidden placeholder:z-50' id='InputArquivo' required={true} accept={`${accept ?? ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}`} />
            </div>
            <div className="flex justify-center">
                <label className='text-placeholder lg:text-lg cursor-pointer' htmlFor='InputArquivo'>
                {texto} 
                </label>
            </div>
        </div>
    )
}
