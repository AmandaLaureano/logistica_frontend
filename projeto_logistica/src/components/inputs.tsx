import { AiFillFolderOpen } from "react-icons/ai";

interface IInputFile {
    placeholder?: string
    onClick?(): void | React.MouseEventHandler<HTMLButtonElement>
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    accept?: string
    text: string
}

export function InputFile({ placeholder, onClick, onChange, accept, text }: IInputFile) {
    return (
        <div className={`bg-green-simple p-2 px-6 rounded md text-2xl text-white w-72 text-center hover:scale-95 transition-all duration-20`}>
            <input type='file' placeholder={placeholder} onClick={onClick} onChange={onChange} multiple={false} readOnly
                className='hidden placeholder:z-50' id='InputFile' required={true} accept={`${accept ?? 'image/*'}`} />
            <label className='text-left text-placeholder w-full h-full whitespace-nowrap overflow-hidden cursor-pointer sm:pl-2 py-2 flex 0' htmlFor='InputFile'>
                {text} <AiFillFolderOpen className="ml-4 my-auto" size={30}/>
            </label>
        </div>
    )
}
