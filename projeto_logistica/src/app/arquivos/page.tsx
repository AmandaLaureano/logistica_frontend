import { ButtonDefault } from "@/src/components/button";
import { api } from "@/src/services/api";
import { ArrayArquivos } from "./arrayArquivos";

export default async function Arquivos() {
    const getArquivos = await api.get('/arq')
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            console.log(err)
            return []
        })

    const arquivos = getArquivos

    return (
        <div className="m-auto mt-8">
            <h1 className="text-3xl font-medium text-center p-4 px-40">
                Arquivos
            </h1>

            <div className="pb-8">
                <ArrayArquivos arquivo={arquivos} />
            </div>
        </div>
    )
}