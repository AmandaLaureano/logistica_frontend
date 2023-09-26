import { MdOutlineDriveFolderUpload } from "react-icons/md";

interface IInputFile {
    placeholder?: string
    onClick?(): void | React.MouseEventHandler<HTMLButtonElement>
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    accept?: string
    text: string
}

export function InputFile({ placeholder, onClick, onChange, accept, text }: IInputFile) {
    return (
        <div className={`bg-green-simple w-fit shadow-md shadow-black-light rounded-sm text-md xl:text-xl text-white px-3 text-center hover:scale-95 transition-all duration-20`}>
            <input type='file' placeholder={placeholder} onClick={onClick} onChange={onChange} multiple={false} readOnly
                className='hidden placeholder:z-50' id='InputFile' required={true} accept={`${accept ?? 'image/*'}`} />
            <label className='text-placeholder w-full h-full overflow-hidden cursor-pointer sm:pl-2 py-1 flex 0' htmlFor='InputFile'>
                {text} <MdOutlineDriveFolderUpload className="hidden xmd:flex ml-2 my-auto w-5 h-5 sm:w-6 sm:h-6"/>
            </label>
        </div>
    )
}
