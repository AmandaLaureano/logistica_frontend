'use client'
import { PiArrowBendDownLeftBold } from "react-icons/pi"
import { useRouter } from 'next/navigation';
import { TbError404 } from "react-icons/tb";

export default function NotFound(){

    const router = useRouter()

    return(
        <main className="flex h-screen w-screen bg-black justify-center place-content-center">
            <div className="place-self-center">
                <div className="flex flex-col justify-items-center">
                    <div className="flex justify-center">
                        <TbError404 className="w-24 h-24 sm:h-32 sm:w-32 md:w-44 md:h-44 lg:w-56 lg:h-56 stroke-green-simple"/>
                    </div>
                    <div className="mt-3 mx-5">
                        <h1 className="text-center text-white font-medium text-2xl sm:text-3xl tracking-wide">Página não encontrada.</h1>
                    </div>
                </div>
                <div className="mt-8 mx-14">
                    <button onClick={() => router.push('/')} className="h-full w-full rounded-md bg-black-light hover:scale-95 transition-all duration-200">
                        <div className="flex mx-2 justify-center place-items-center items-stretch">
                            <h1 className="m-2 font-bold text-sm xmd:text-base sm:text-lg text-white">Voltar ao início</h1>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    )
}