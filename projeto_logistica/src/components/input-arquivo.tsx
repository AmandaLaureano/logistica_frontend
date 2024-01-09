'use client'

interface IInputArquivo {
    placeholder?: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
    onDrop?(files: FileList): void;
    accept?: string
    texto: string
    
}

export function InputArquivo({ placeholder, onChange, accept, texto, onDrop }: IInputArquivo) {

    return (
        <label>
            <div className="w-full h-fit bg-black/50 shadow-inner cursor-pointer shadow-black-light/30 text-white rounded-sm lg:text-lg px-5 py-1 hover:scale-95 transition-all duration-200"
            >
                <div>
                    <input 
                        type='file' 
                        placeholder={placeholder} 
                        onChange={onChange} 
                        multiple={false} 
                        readOnly
                        className='hidden placeholder:z-50' 
                        id='InputArquivo' 
                        required={true} 
                        accept={`${accept ?? ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}`} 
                    />
                </div>
                <div className="flex justify-center">
                    <label className='text-placeholder cursor-pointer lg:text-lg font-medium' htmlFor='InputArquivo'>
                    {texto} 
                    </label>
                </div>
            </div>
        </label>
    )
}
