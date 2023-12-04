'use client'
import { InputArquivo } from "@/src/components/input-arquivo"
import Linha from "./linha-formulario"
import { MdClose } from "react-icons/md"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FormularioImpostos({ trt, tda, despacho, pegadio, gris, adVal, cam, prazo, adv, kg }: IFormularioImpostos, {params}: any) {

    const [values, setValues] = useState({
        trt,
        tda,
        despacho,
        pegadio,
        gris,
        adVal,
        cam,
        prazo,
        adv,
        kg,
        arquivo: {} as File,
    })

    const handleChange = (key: string, value: any) => {
        setValues(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };
    console.log(params)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const extension = file.name.split('.').pop()

            if (extension !== 'xlsx' && file.type !== 'application/vnd.ms-excel') {
                toast.error('Por favor, selecione um arquivo .xlsx válido!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                return
            }
            setValues(prevState => ({
                ...prevState,
                arquivo: file,
            }));
        }
    };

    // Envio da requisição para impostos
    const patchImpostos = () => {
        const { arquivo, ...impostosData } = values;
        
        api.patch(`/impostos/${params}`, {
            transportadoraId: params,
            ...impostosData,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Erro: Não foi possível enviar os dados dos impostos!', err);
        });
    };

    // Envio da requisição para SBA
    const patchSba = () => {
        const { arquivo, ...sbaData } = values;

        api.patch(`/sba/${params}`, {
            ...sbaData,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Erro: Não foi possível enviar os dados do SBA!', err);
        });
    };

    // Envio da requisição para upload do arquivo
    const patchArquivo = () => {
        const { arquivo } = values;

        api.post(`/gobor/upload`, {
            anexo: arquivo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Erro:', err);
        });
    };
    
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Linha 
            nomeImposto={"TRT"} 
            infoImposto={"Taxa de Restrição de Trânsito"} 
            valorImposto={values.trt ? values.trt: 0}
            onChangeValue={(e: any) => handleChange('trt', e.target.value)} 
            />
            <Linha 
            nomeImposto={"TDA"} 
            infoImposto={"Taxa de Difícil Acesso"} 
            valorImposto={values.tda ? values.tda: 0}
            onChangeValue={(e: any) => handleChange('tda', e.target.value)} 
            />
            <Linha 
            nomeImposto={"TAXA DE DESPACHO"} 
            infoImposto={""} 
            valorImposto={values.despacho ? values.despacho: 0}
            onChangeValue={(e: any) => handleChange('despacho', e.target.value)} 
            />
            <Linha 
            nomeImposto={"PEDÁGIO"} 
            infoImposto={""} 
            valorImposto={values.pegadio ? values.pegadio: 0}
            onChangeValue={(e: any) => handleChange('pegadio', e.target.value)} 
            />
            <Linha 
            nomeImposto={"GRIS"} 
            infoImposto={"Gerenciamento de Riscos"} 
            valorImposto={values.gris ? values.gris: 0}
            onChangeValue={(e: any) => handleChange('gris', e.target.value)} 
            />
            <Linha 
            nomeImposto={"ADVAL"} 
            infoImposto={""} 
            valorImposto={values.adVal ? values.adVal: 0}
            onChangeValue={(e: any) => handleChange('adVal', e.target.value)} 
            />
            <Linha 
            nomeImposto={"CAM"} 
            infoImposto={"Custo Adicional de Manuseio e Separação"} 
            valorImposto={values.cam ? values.cam: 0} 
            onChangeValue={(e: any) => handleChange('cam', e.target.value)} 
            />
            <Linha 
            nomeImposto={"PRAZO"} 
            infoImposto={"SBA"} 
            valorImposto={values.prazo ? values.prazo: 0}
            onChangeValue={(e: any) => handleChange('prazo', e.target.value)} 
            />
            <Linha 
            nomeImposto={"ADV"} 
            infoImposto={"SBA"} 
            valorImposto={values.adv ? values.adv: 0}
            onChangeValue={(e: any) => handleChange('adv', e.target.value)} 
            />
            <Linha 
            nomeImposto={"KG"} 
            infoImposto={"SBA"} 
            valorImposto={values.kg? values.kg: 0} 
            onChangeValue={(e: any) => handleChange('kg', e.target.value)} 
            />
            
            <div className="flex flex-col lg:flex-row py-10 gap-5">
                <div className="w-full">
                    <InputArquivo placeholder={"Anexar Arquivo"} texto={"Anexar Arquivo"} onChange={handleFileChange}/>
                    {values.arquivo.name != undefined &&
                        <div className="flex justify-between rounded-sm shadow-inner shadow-black-light/30 my-2 bg-white">
                            <div className="truncate py-1">
                                <span className="text-sm font-medium mx-2">
                                    {values.arquivo.name}
                                </span>
                            </div>
                            <div className="flex justify-end my-1">
                                <button className="" onClick={() => handleChange('arquivo', {} as File)}>
                                    <MdClose className=" hover:scale-95 duration-200 mx-2 fill-red" size={20} />
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="w-full">
                    <button className="w-full py-1 h-fit shadow-inner bg-green-simple shadow-black-light/30 text-white rounded-sm lg:text-lg px-5 hover:scale-95 transition-all duration-200" onClick={() => {patchImpostos(); patchArquivo(); patchSba();}}>
                        <label className='h-full text-placeholder lg:text-lg overflow-hidden cursor-pointer'>
                            Enviar Alterações
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}