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
        <div className="ContainerScrollHidden w-full mt-24 bg-white-simple px-20 pb-20 pt-12 rounded-md shadow-md shadow-black-gray-border overflow-auto">
            <div className="flex justify-center">
                <VscFileSubmodule className="fill-green-simple w-9 h-9 mr-2"/>
                <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-center pb-5">
                    Últimos arquivos
                </p>
            </div> 
            {archives.map((item, index) => {
                return (
                    <div className="bg-green-simple/10 rounded-md my-6 py-4 px-6 shadow-lg shadow-black/50" key={item.nome}>
                        <h1 className="text-2xl font-medium"> 
                            {item.nome}
                        </h1>
                        <h1 className="text-sm font-medium text-gray">
                            {item.dataCriacao}
                        </h1>
                        <div className="flex justify-start pt-5 space-x-4 mt-8">
                            <ButtonDefault background="green-simple" width="72" >
                                <div className="flex justify-center">
                                    Dowload Fretefy <ImDownload size={25} className="ml-4" />
                                </div>
                            </ButtonDefault>
                            <ButtonDefault background="green-simple" width="72">
                                <div className="flex justify-center">
                                    Dowload Vtex <ImDownload size={25} className="ml-4" />
                                </div>
                            </ButtonDefault>
                        </div>
                    </div>
                )
            }
            )}
            <div className="flex justify-end mt-8">
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