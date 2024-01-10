'use client'
import { useState } from "react"
import animationData from './Animation - 1704821217959.json'
import Lottie from 'react-lottie';
import { VscClose } from "react-icons/vsc"

interface IDragAndDrop {
    onDrop?(files: FileList): void;
    accept?: string
    texto: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
    onClick?(): void | React.MouseEventHandler<HTMLButtonElement>
    arquivo: File | undefined
}

export function DragAndDrop({ accept, texto, onDrop, onChange, onClick, arquivo }: IDragAndDrop) {

    const [dragging, setDragging] = useState(false)

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const droppedFiles = e.dataTransfer.files;
        if (onDrop) {
            onDrop(droppedFiles);
        }
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <label className="flex justify-center pb-6">
            <div 
            className={`${dragging && 'outline-dashed outline-green-simple/50 bg-white outline-offset-[-25px] transition-all duration-500 ease-in-out'} flex justify-center items-center w-full h-64 bg-white-normal cursor-pointer outline-dashed outline-offset-[-15px] outline-green-simple/50 text-white rounded-sm lg:text-lg mx-5 sm:mx-10 py-1`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            >
                <div className="">
                    <input 
                        type='file'
                        onChange={onChange}  
                        multiple={false}
                        style={{ display: 'none'}} 
                        id='drag-and-drop' 
                        required={true}  
                        accept={`${accept ?? ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}`} 
                    >
                    </input> 
                </div>
                <div className="flex flex-col justify-center items-center mx-5 h-full">
                    <div className="my-5">
                        <Lottie 
                        options={defaultOptions}
                        height={100}
                        width={200}
                        />
                    </div>
                    <div className="mx-5">
                        <div className="flex flex-col sm:flex-row justify-items-center">
                            <div className="flex items-center break-all">
                                <h1 className='flex text-black/50 text-center cursor-pointer text-xs xmd:text-sm sm:text-lg font-medium'>
                                {texto}
                                </h1>
                            </div>
                            {arquivo !== undefined && arquivo.name && (
                                <div className="flex justify-center items-center w-full sm:w-fit h-fit">
                                    <button
                                    onClick={(event) => {
                                        event.preventDefault()
                                        if (onClick) {
                                            onClick()
                                        }
                                    }}
                                    >
                                        <VscClose className="hover:scale-95 duration-200 mx-2 sm:my-1 stroke-1 stroke-red fill-red w-6 h-6"/>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </label>
    )
}
