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
        <div className="ContainerScrollHidden first-letter:w-11/12 p-8 lg:w-8/12 m-auto mt-24 bg-white-simple pb-10 rounded-md shadow-md shadow-black-gray-border max-h-[700px] overflow-auto">
            <div className="flex justify-center">
                <p className="tracking-widest text-xl lg:text-2xl xl:text-3xl font-medium text-center p-4 ">
                    Arquivos
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