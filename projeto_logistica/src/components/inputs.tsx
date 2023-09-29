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
        <div className="grid justify-items-center bg-green-simple w-full shadow-md shadow-black-light rounded-sm text-md xl:text-xl text-white px-3 text-center hover:scale-95 transition-all duration-20">
            <div>
                <input type='file' placeholder={placeholder} onClick={onClick} onChange={onChange} multiple={false} readOnly
                className='hidden placeholder:z-50' id='InputFile' required={true} accept={`${accept ?? 'image/*'}`} />
            </div>
            <div>
                <label className='text-placeholder lg:text-lg w-full h-full overflow-hidden cursor-pointer sm:pl-2 py-1 flex 0' htmlFor='InputFile'>
                {text} <MdOutlineDriveFolderUpload className="hidden xmd:flex ml-2 my-auto w-5 h-5 sm:w-6 sm:h-6"/>
                </label>
            </div>
        </div>
    )
}
