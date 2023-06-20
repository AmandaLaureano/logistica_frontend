import Image from 'next/image'
import folha from "@assets/folha.png"

export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 fixed w-full shadow-sm shadow-black-light bg-black h-[60px] border-b-2 border-black-gray-border">
            <div className="flex items-center">
                <div className="grid justify-items-start w-[150px]">
                    <Image className='ml-5 w-[40px] h-[30px]' src={folha} alt="logo folha" quality={100} />
                </div>
                
            </div>
            <div className="flex flex-row-reverse gap-5 justify-items-end items-center pr-10">
            </div>
        </nav>
    )
}