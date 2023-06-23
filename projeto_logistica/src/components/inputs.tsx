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
        <div className={`bg-green-simple shadow-md shadow-black-light rounded-sm text-md xl:text-xl text-white px-3 text-center hover:scale-95 transition-all duration-20`}>
            <input type='file' placeholder={placeholder} onClick={onClick} onChange={onChange} multiple={false} readOnly
                className='hidden placeholder:z-50' id='InputFile' required={true} accept={`${accept ?? 'image/*'}`} />
            <label className='text-placeholder w-full h-full overflow-hidden cursor-pointer sm:pl-2 py-1 flex 0' htmlFor='InputFile'>
                {text} <AiFillFolderOpen className="ml-2 my-auto w-6 h-6"/>
            </label>
        </div>
    )
}
