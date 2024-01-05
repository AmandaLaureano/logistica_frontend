'use client'
import { ButtonDefault } from "../../../components/button";
import { FaDownload } from "react-icons/fa";

export default async function Downloads() {

    const getDownloadLink = (key: string) => {
        const downloadLinks = sessionStorage.getItem(key)
        return downloadLinks
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

    return(
        <div className="px-5 2xl:px-12 mt-24 h-full">
            <div className="w-full pb-12 bg-white-simple shadow-md shadow-black-gray-border rounded-md">
                <div className="text-center p-2 xmd:p-3 sm:p-4 pt-6">
                    <h1 className="font-medium text-2xl lg:text-3xl p-5">
                        Os arquivos foram convertidos
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-5 px-7">
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