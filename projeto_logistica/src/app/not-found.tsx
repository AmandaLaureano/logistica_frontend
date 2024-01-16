'use client'
import { PiArrowBendDownLeftBold } from "react-icons/pi"
import { useRouter } from 'next/navigation';

export default function NotFound(){

    const router = useRouter()

    return(
        <main className="flex h-screen w-screen bg-black justify-center place-content-center">
            <div className="place-self-center">
                <div className="mt-8 mx-5">
                    <h1 className="text-center text-white font-bold text-2xl sm:text-3xl xl:text-5xl tracking-wide">Página não encontrada!</h1>
                </div>
                <div className="mt-8 mx-5">
                    <button onClick={() => router.push('/')} className="h-full w-full rounded-md bg-black-light shadow-sm shadow-green-simple hover:scale-95 transition-all duration-200">
                        <div className="mx-5 flex justify-center place-items-center items-stretch">
                            <h1 className="m-2 font-bold text-sm xmd:text-base sm:text-lg text-white">Voltar ao início</h1>
                            <PiArrowBendDownLeftBold className="hidden sm:flex self-center mt-1 fill-white h-5 w-5"/>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    )
}