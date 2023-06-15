import { ButtonDefault } from "@/src/components/button";
import { api } from "@/src/services/api";

export default async function Arquivos() {
    const getArquivos = await api.get('/arq')
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            console.log(err)
            return []
        })

    const arquivo = await getArquivos

    return (
        <div className="m-auto mt-24">
            <h1 className="text-3xl font-medium text-center p-4 px-40">
                Arquivos
            </h1>
            <div className="w-11/12 p-8 lg:w-8/12 m-auto bg-light-gray pb-10 rounded-xl border border-black-gray-border">

                {arquivo.map((item: any, index: any) => {
                    return (
                        <div className="bg-green-simple/20 rounded-md my-6 py-4 px-6 shadow-lg shadow-black/50">
                            <h1 className="text-2xl">{item.nome}</h1>
                            <h4> {item.dataCriacao}</h4>
                            <div className="flex justify-start pt-5 space-x-4 mt-8">
                                <ButtonDefault background="green-simple" width="72" >Download Fretefy</ButtonDefault>
                                <ButtonDefault background="green-simple" width="72">Dowload Vtex</ButtonDefault>
                            </div>
                        </div>
                    )
                })}

                <div className="flex justify-end mt-8 hidden">
                    <ButtonDefault background="green-simple" width="56" >Ver mais</ButtonDefault>
                </div>
            </div>
        </div>
    )
}