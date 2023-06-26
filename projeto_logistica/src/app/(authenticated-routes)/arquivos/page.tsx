import { api } from "@/src/services/api";
import { ArrayArquivos } from "../arquivos/array-arquivos";

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
        <div className="m-auto mt-24">
            <div className="pb-8">
                <ArrayArquivos arquivo={arquivos} />
            </div>
        </div>
    )
}