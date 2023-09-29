import Image from 'next/image'
import logo from "@assets/logo-pormade.png"
import Link from "next/link"

export default function NavbarSuporte() {
    return (
        <nav className="flex w-full bg-black h-[80px] border-b-2 border-black-gray-border fixed">
            <div className="flex justify-between mx-8 items-center w-full">
                <div>
                    <Image className='w-[160px] h-[50px]' src={logo} alt="logo folha" quality={100} />
                </div>
                <div className='flex items-center h-full'>
                    <Link href="/login">
                        <button className='loginButton flex items-stretch justify-center shadow-sm shadow-green-simple bg-black-light h-8 w-50 rounded-sm hover:scale-95 transition-all duration-200'>
                            <div className='flex items-center mx-3'>
                                <span className='text-sm text-white-simple font-semibold tracking-wide'>Faça seu login na plataforma</span>
                            </div>
                        </button>
                    </Link>   
                </div>
            </div>
        </nav> 
    )
}