import { PiArrowBendDownLeftBold } from "react-icons/pi"

import Link from "next/link";

export default function NotFound(){
     return(
         <main className="flex h-screen w-screen bg-black justify-center place-content-center">
             <div className="place-self-center">
                <div className="w-full flex justify-center place-content-center">
                    <h1 className="w-fit text-9xl font-extrabold text-green-simple">404</h1>
                </div>
                <div className="mt-8">
                    <h1 className="text-center text-white font-bold text-3xl tracking-wide">Página não encontrada.</h1>
                </div>
                <div className="mt-8">
                    <Link href="/">
                        <button className=" h-10 w-full rounded-md bg-black-light shadow-sm shadow-green-simple hover:scale-95 transition-all duration-200">
                            <div className="mx-5 flex justify-center place-items-center items-stretch">
                                <h1 className="mr-2 font-bold text-lg text-white">Voltar para a tela inicial</h1>
                                <PiArrowBendDownLeftBold className="mt-1 fill-white h-5 w-5"/>
                            </div>
                        </button>
                    </Link>
                </div>
             </div>
         </main>
    )
}