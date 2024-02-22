'use client'
import { useRouter } from 'next/navigation';
import { TbError404 } from "react-icons/tb";
import { Button } from "@/components/ui/button"


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
                    <Button className='h-full w-full' onClick={() => router.push('/')} variant="default">
                        <span className='text-lg mx-2'>Voltar ao início</span>
                    </Button>
                </div>
            </div>
        </main>
    )
}