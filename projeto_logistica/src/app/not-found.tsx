'use client'
import { PiArrowBendDownLeftBold } from "react-icons/pi"
import animationData from '../app/Animation - 1704829687849.json'
import Lottie from 'react-lottie';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function NotFound(){

    const router = useRouter()

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <main className="flex h-screen w-screen bg-black justify-center place-content-center">
            <div className="place-self-center">
                <div className="w-full flex justify-center place-content-center">
                {isClient && (
                        <div style={{ width: '80%', maxWidth: '450px', height: 'auto' }}>
                            <Lottie options={defaultOptions} />
                        </div>
                    )}
                </div>
                <div className="mt-8 mx-5">
                    <h1 className="text-center text-white font-bold text-xl sm:text-2xl xl:text-3xl tracking-wide">Página não encontrada!</h1>
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