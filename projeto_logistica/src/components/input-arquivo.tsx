'use client'
import { useState } from "react"
import animationData from '../components/Animation - 1704821217959.json'
import Lottie from 'react-lottie';

interface IInputArquivo {
    onDrop?(files: FileList): void;
    accept?: string
    texto: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export function InputArquivo({ accept, texto, onDrop, onChange }: IInputArquivo) {

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
            <div className={`flex justify-center items-center w-full h-64 bg-white-normal cursor-pointer text-white rounded-lg lg:text-lg mx-5 sm:mx-10 py-1 border-dashed border-green-simple/50 border-4`}
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
                        id='InputArquivo' 
                        required={true} 
                        accept={`${accept ?? ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}`} 
                    >
                    </input> 
                </div>
                <div className="flex flex-col justify-center items-center mx-5">
                    <div className="my-5">
                        <Lottie 
                        options={defaultOptions}
                        height={100}
                        width={200}
                        />
                    </div>
                    <div className="mx-5">
                        <label className='flex text-black/50 cursor-pointer text-xs xmd:text-sm sm:text-lg font-medium text-center' htmlFor='InputArquivo'>
                        {texto} 
                        </label>
                    </div>
                </div>
            </div>
        </label>
    )
}
