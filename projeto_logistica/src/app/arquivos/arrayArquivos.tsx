'use client'
import { ButtonDefault } from "@/src/components/button"
import { useState } from "react"
import { ImDownload } from "react-icons/im"

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
    }

    return (
        <div className="w-11/12 p-8 lg:w-8/12 m-auto bg-light-gray pb-10 rounded-xl border border-black-gray-border max-h-[700px] overflow-auto ContainerScrollHidden">
            {archives.map((item, index) => {
                return (
                    <div className="bg-green-simple/20 rounded-md my-6 py-4 px-6 shadow-lg shadow-black/50" key={item.nome}>
                        <h1 className="text-2xl">
                            {item.nome}
                        </h1>
                        <h4>
                            {item.dataCriacao}
                        </h4>
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
                    <ButtonDefault background="green-simple" width="56" onClick={handleViewMore}>
                        Ver mais
                    </ButtonDefault>
                    :
                    null
                }
            </div>
        </div>
    )
}