import Image from 'next/image'
import folha from "@assets/folha.png"


export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 w-full shadow-sm shadow-black-light bg-black h-[60px] border-b-2 border-black-gray-border fixed">
            <div className="flex items-center pl-7">
                <div className={`flex justify-items-start w-full`}>
                    <Image className='w-[40px] h-[30px]' src={folha} alt="logo folha" quality={100} />
                </div>
            </div>
            <div className="flex flex-row-reverse gap-5 justify-items-end items-center pr-8">
            </div>
        </nav> 
    )
}