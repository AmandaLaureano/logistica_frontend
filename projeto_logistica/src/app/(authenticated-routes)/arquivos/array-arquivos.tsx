'use client'
import { ButtonDefault } from "@/src/components/button"
import { useState } from "react"
import { ImDownload } from "react-icons/im"
import { VscFileSubmodule } from "react-icons/vsc"
import Swal from "sweetalert2"

interface IArrayArquivos {
    arquivo: Array<IArquivos>
}

interface IArquivos {
    nome: string,
    dataCriacao: string
}

export function ArrayArquivos({ arquivo }: IArrayArquivos) {
    const [archives, setArchives] = useState<IArquivos[]>([arquivo[0]])
    const [seeAll, setSeeAll] = useState<boolean>(false);

    function handleViewMore() {
        setArchives(arquivo)
        setSeeAll(true)

        Swal.fire({
            customClass: {
                title:"text-xl",
                popup:"shadow-md shadow-black-light rounded-lg",
                cancelButton: "shadow-sm shadow-black-light",
                confirmButton: "shadow-sm shadow-black-light",
            },
            icon: "warning",
            title: "Atenção! Os arquivos a seguir estão desatualizados. Deseja continuar?",
            cancelButtonText: 'Cancelar',
            cancelButtonColor: "#D52C2C",
            confirmButtonText: "Continuar",
            confirmButtonColor: "#509D45",
            showConfirmButton: true,
            showCancelButton: true,
            focusCancel: true,
            reverseButtons: true,
        })
    }

    return (
        <div className="ContainerScrollHidden w-full mt-24 bg-white-simple lg:px-20 pb-20 pt-12 rounded-md shadow-md shadow-black-gray-border overflow-auto">
            <div className="flex justify-center">
                <VscFileSubmodule className="hidden md:flex self-center fill-green-simple md:w-9 md:h-9 lg:w-11 lg:h-11"/>
                <p className="font-medium text-xl xmd:text-2xl sm:text-2xl lg:text-3xl text-center p-2 xmd:p-3 sm:p-4 pt-6">
                    Arquivos
                </p>
            </div> 
            {archives.map((item, index) => {
                return (
                    <div className="bg-green-simple/10 rounded-md shadow-lg shadow-black/50 p-5 m-5" key={item.nome}>
                        <h1 className="text-lg lg:text-2xl font-medium"> 
                            {item.nome}
                        </h1>
                        <h1 className="text-xs font-medium text-gray">
                            {item.dataCriacao}
                        </h1>
                        <div className="flex flex-col sm:flex-row pt-5 gap-4">
                            <ButtonDefault background="green-simple" width="72">
                                <div className="flex justify-center text-sm xmd:text-lg">
                                    Dowload Fretefy <ImDownload size={25} className="hidden sm:flex ml-4" />
                                </div>
                            </ButtonDefault>
                            <ButtonDefault background="green-simple" width="72">
                                <div className="flex justify-center text-sm xmd:text-lg">
                                    Dowload Vtex <ImDownload size={25} className="hidden sm:flex ml-4" />
                                </div>
                            </ButtonDefault>
                        </div>
                    </div>
                )
            }
            )}
            <div className="flex justify-center sm:justify-end text-sm xmd:text-lg mx-5">
                {!seeAll ?
                    <ButtonDefault background="green-simple" width="50" onClick={handleViewMore}>
                        Ver mais
                    </ButtonDefault>
                    :
                    null
                }
            </div>
        </div>
    )
}