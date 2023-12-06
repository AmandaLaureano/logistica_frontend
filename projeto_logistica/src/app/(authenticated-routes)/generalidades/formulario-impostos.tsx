'use client'
import { InputArquivo } from "@/src/components/input-arquivo"
import Linha from "./linha-formulario"
import { MdClose } from "react-icons/md"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2"

export function FormularioImpostos({ trt, tda, despacho, pedagio, gris, adVal, cam, prazo, adv, kg, params }: IFormularioImpostos) {

    const [values, setValues] = useState({
        trt,
        tda,
        despacho,
        pedagio,
        gris,
        adVal,
        cam,
        prazo,
        adv,
        kg,
        arquivo: {} as File,
    })

    const handleChange = (key: string, value: any) => {
        if(value < 0){
            value = 0
        }
        setValues(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]
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
            }))
        }
    }

    // Envio da requisição para impostos
    const patchImpostos = async () => {
        try{
            const { ...impostosData } = {
            trt: values.trt,
            tda: values.tda,
            despacho: values.despacho,
            pedagio: values.pedagio,
            gris: values.gris,
            adVal: values.adVal,
            cam: values.cam
            }

            const res = await api.patch(`http://192.168.155.22:3000/impostos/${params}`, {
                transportadoraId: params,
                ...impostosData,
            })
            
            console.log(res)
        }
        catch(err) {
            console.log('Erro: Não foi possível enviar os dados dos impostos!', err)
        }
    }

    // Envio da requisição para SBA
    const patchSba = async () => {

        try{
            const { ...sbaData } = {
            prazo: values.prazo,
            adv: values.adv,
            kg: values.kg 
            }
            const res = await api.patch(`http://192.168.155.22:3000/sba/${params}`, {
                transportadoraId: params,
                ...sbaData,
            })
            console.log(res)
        }
        catch(err) {
            console.log('Erro: Não foi possível enviar os dados do SBA!', err)
        }
    }
    
    // Envio da requisição para upload do arquivo
    const patchArquivo = async () => {
        try{
            const formData = new FormData()
            formData.append('file', values.arquivo)
            const res = await api.post(`http://192.168.155.22:3000/gobor/upload`, formData, {
                headers:{
                    "Content-Type": 'multipart/form-data'
                }
            })
            console.log(res.data)
        }
        catch(err){
            console.log('Erro ao fazer o upload do arquivo', err)
        }
    }

    const sendRequests = async () =>{
        try{
            await Promise.all([
                patchArquivo(),
                patchImpostos(),
                patchSba()
            ])

            Swal.fire({
                icon: 'success',
                title: 'Alterações enviadas com sucesso!',
                text: 'deseja cadastrar uma nova generalidade?'
            })
        } catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar os dados!',
                text: 'Verifique sua conexão com a internet ou entre em contato com o suporte.'
            })
        }
    }
    
    const handleSendData = () => {
        if(!values.arquivo || !values.arquivo.name){
            toast.error('Por favor, anexe um arquivo antes de enviar as alterações!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }else{
            sendRequests()
        }
    }
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
            valorImposto={values.pedagio ? values.pedagio: 0}
            onChangeValue={(e: any) => handleChange('pedagio', e.target.value)} 
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
                    <button 
                    className="w-full py-1 h-fit shadow-inner bg-green-simple shadow-black-light/30 outline-none text-white rounded-sm lg:text-lg px-5 hover:scale-95 transition-all duration-200" 
                    onClick={() => {handleSendData();}}
                    >
                    <label className='h-full text-placeholder lg:text-lg overflow-hidden cursor-pointer'>
                        Enviar Alterações
                    </label>
                    </button>
                </div>
            </div>
        </div>
    )
}