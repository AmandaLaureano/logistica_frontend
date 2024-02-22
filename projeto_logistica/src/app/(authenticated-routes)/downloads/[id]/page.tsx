'use client'
import { ButtonDefault } from "../../../../components/button";
import { FaDownload } from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from '../../downloads/[id]/Animation - 1704735080367.json'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Tooltip from '@mui/material/Tooltip';

export default function Downloads({params}: any) {

    const router = useRouter()

    const getDownloadLink = (key: string) => {
        const downloadLinks = sessionStorage.getItem(key)
        return downloadLinks ?? null
    }

    const handleDownloadClick = (key: string) => { 
        const getDownloads = getDownloadLink(key)

        if(getDownloads){
            const link = document.createElement('a')
            link.href = getDownloads
            link.setAttribute('download', '')
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }else{
            console.error('Link não encontrado')
        }
    }

    const style = {
        height: 250,
        width: 250
    }

    return(
        <div className="grid">
            <div className="bg-white-normal/50 justify-self-center rounded-sm shadow-md shadow-black-gray-border my-20 w-11/12 lg:w-2/3">
                <div>
                    <Tooltip disableFocusListener title="Voltar para Generalidades" placement="right-start">
                        <button onClick={() =>{(router.push(`/generalidades/${params.id}`))}} className="focus:outline-none m-5 p-2 hover:bg-green-simple rounded-full bg-black-gray-border">
                            <IoMdArrowRoundBack className="h-6 w-6 fill-white"/>
                        </button>
                    </Tooltip>
                </div>
                <div className="w-full flex justify-center">
                    <div>
                        <Lottie 
                        animationData={animationData}
                        style={style}
                        autoplay={true}
                        loop={false}
                        />
                    </div>
                </div>
                <div className="text-center pb-5">
                    <p className="animate-pulse font-medium text-2xl 2xl:text-3xl p-5">
                        Os arquivos foram processados com sucesso!
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-5 px-7 pb-20">
                    <ButtonDefault onClick={() => {handleDownloadClick('fretefy')}} background="green-simple">
                        <div className="flex justify-center flex-row-reverse place-items-center sm:px-6">
                            <div className="">
                                <h1 className="text-white font-medium text-xl p-1">Baixar Fretefy</h1>
                            </div>
                            <div className="hidden sm:flex">
                                <FaDownload className="h-4 w-4 sm:h-6 sm:w-6 m-1" stroke="white"/>
                            </div>
                        </div>
                    </ButtonDefault>
                    <ButtonDefault onClick={() => {handleDownloadClick('vtex')}} background="green-simple">
                        <div className="flex justify-center flex-row-reverse sm:px-6">
                            <div className="flex flex-row">
                                <h1 className="text-white font-medium text-xl p-1">Baixar Vtex</h1>
                            </div>
                            <div className="hidden sm:flex">
                                <FaDownload className="h-4 w-4 sm:h-6 sm:w-6 m-1" stroke="white"/>
                            </div>
                        </div>
                    </ButtonDefault>
                </div>
            </div>
        </div>
    )
}