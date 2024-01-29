'use client'
import { DragAndDrop } from "@/src/components/drag-and-drop"
import Linha from "./linha-formulario"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import { AiOutlinePercentage } from "react-icons/ai"
import { MdAttachMoney } from "react-icons/md"
import { TbCalendarTime } from "react-icons/tb"
import Tooltip from '@mui/material/Tooltip';

export function FormularioImpostos({ trt, tda, despacho, pedagio, gris, adVal, cam, prazo, adv, kg, params }: IFormularioImpostos) {

    const router = useRouter()

    const [values, setValues] = useState({ trt, tda, despacho, pedagio, gris, adVal, cam, prazo, adv, kg, arquivo: {} as File })
    
    const infoImpostos = [
        { nome: "TRT", info: "Taxa de Restrição de Trânsito", valor: values.trt, onChange: (newValue: string) => handleChange('trt', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "reais", icon: <MdAttachMoney className="w-5 h-5 fill-green-simple"/>},
        { nome: "TDA", info: "Taxa de Difícil Acesso", valor: values.tda, onChange: (newValue: string) => handleChange('tda', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "reais", icon: <MdAttachMoney className="w-5 h-5 fill-green-simple"/>},
        { nome: "TAXA DE DESPACHO", info: "", valor: values.despacho, onChange: (newValue: string) => handleChange('despacho', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "reais", icon: <MdAttachMoney className="w-5 h-5 fill-green-simple"/>},
        { nome: "PEDÁGIO", info: "", valor: values.pedagio, onChange: (newValue: string) => handleChange('pedagio', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "reais", icon: <MdAttachMoney className="w-5 h-5 fill-green-simple"/>},
        { nome: "GRIS", info: "Gerenciamento de Riscos", valor: values.gris, onChange: (newValue: string) => handleChange('gris', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "porcentagem", icon: <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>},
        { nome: "ADVAL", info: "", valor: values.adVal, onChange: (newValue: string) => handleChange('adVal', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "porcentagem", icon: <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>},
        { nome: "CAM", info: "Custo Adicional de Manuseio e Separação", valor: values.cam, onChange: (newValue: string) => handleChange('cam', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "porcentagem", icon: <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>},
        { nome: "PRAZO", info: "SBA", valor: values.prazo, onChange: (newValue: string) => handleChange('prazo', newValue), mask: "dias", placeholder: "0", tooltipMessage: "Valor do imposto em dias", icon: <TbCalendarTime className="w-5 h-5 stroke-green-simple" />},
        { nome: "ADV", info: "SBA", valor: values.adv, onChange: (newValue: string) => handleChange('adv', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "porcentagem", icon: <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>},
        { nome: "KG", info: "SBA", valor: values.kg, onChange: (newValue: string) => handleChange('kg', newValue), mask: "reais", placeholder: "0.00", tooltipMessage: "reais", icon: <MdAttachMoney className="w-5 h-5 fill-green-simple"/>},
    ]

    const handleChange = (key: string, value: string) => {
        setValues(prevState => ({
            ...prevState,
            [key]: (value),
        }))
    }

    const handleRemoveFile = () => {
        setValues(prevState => ({
            ...prevState,
            arquivo: {} as File,
        }))
        const fileInput = document.getElementById('drag-and-drop') as HTMLInputElement
        if(fileInput){
            fileInput.value = ''
        }
    }
    
    const handleDropFile = (files: FileList) => {
        const droppedFile = files[0];
        if (droppedFile) {
            setValues(prevState => ({
                ...prevState,
                arquivo: droppedFile,
            }));
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]
            if(file){
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
    }

    // Envio da requisição para impostos
    const patchImpostos = async () => {
        try{
            const { ...impostosData } = {
            trt: parseFloat(values.trt),
            tda: parseFloat(values.tda),
            despacho: parseFloat(values.despacho),
            pedagio: parseFloat(values.pedagio),
            gris: parseFloat(values.gris),
            adVal: parseFloat(values.adVal),
            cam: parseFloat(values.cam),
            transportadoraId: params
            }
            console.log({...impostosData})
            const res = await api.patch(`http://192.168.155.22:3000/impostos/${params}`, {
                ...impostosData,
            })
            console.log(res)
        }
        catch(err: any) {
            throw {title: 'Erro ao enviar os dados dos impostos', text:`${err.response.data.message[0]} O campo não pode estar vazio`}
        }
    }

    // Envio da requisição para SBA
    const patchSba = async () => { 
        try{
            const { ...sbaData } = {
            prazo: parseInt(values.prazo),
            adv: parseFloat(values.adv),
            kg: parseFloat(values.kg),
            transportadoraId: params 
            }
            const res = await api.patch(`http://192.168.155.22:3000/sba/${params}`, {
                ...sbaData,
            })
            console.log(res)
        }
        catch(err: any) {
            throw {title: 'Erro ao enviar os dados do SBA', text:`${err.response.data.message[0]} O campo não pode estar vazio`}
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
            
            window.sessionStorage.setItem("fretefy", res.data.fretefy)
            window.sessionStorage.setItem("vtex", res.data.vtex)
        }
        catch(err){
            handleRemoveFile()
            throw {
            title: 'Erro ao processar o arquivo',
            text: 'Somente o arquivo da transportadora correspondente deve ser anexado'}
        }
    }

    const sendAllRequests = async () => {
        try{
            Swal.fire({
                title: 'Convertendo arquivos...',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            })

            await Promise.all([
                patchArquivo(),
                patchImpostos(),
                patchSba()
            ])
                .then(() =>{
                    setTimeout(() =>{
                        Swal.close()
                        router.push(`/downloads/${params}`)
                    }, 2000)
                })
                .catch((err) =>{
                    Swal.fire({
                    icon: 'error',
                    title: err.title,
                    text: err.text,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#509D45"
                    })
                })

        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar os dados!',
                text: 'Verifique sua conexão com a internet ou entre em contato com o suporte.'
            })
        } 
    }
    
    const handleSendFile = () => {
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
            sendAllRequests()
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
                toastClassName="mx-5 sm:mx-0"
            />

            {infoImpostos.map((infoImpostos, index) => (
                <Linha
                key={index}
                nomeImposto={infoImpostos.nome} 
                infoImposto={infoImpostos.info} 
                valorImposto={infoImpostos.valor}
                onChange={infoImpostos.onChange}
                mask={infoImpostos.mask}
                placeholder={infoImpostos.placeholder} 
                >   
                    <Tooltip title={infoImpostos.nome === "PRAZO" ? infoImpostos.tooltipMessage :`Valor do imposto em ${infoImpostos.tooltipMessage === 'reais' ? 'reais' : 'porcentagem'}`} placement="top" arrow>
                        <button>
                            {infoImpostos.icon} 
                        </button>
                    </Tooltip>
                </Linha>
            ))}

            <div className="flex flex-col py-10 gap-5">
                <div className="w-full">
                    <DragAndDrop onClick={handleRemoveFile} arquivo={values.arquivo} texto={values.arquivo.name !== undefined ? values.arquivo.name: 'Arraste e solte o arquivo ou clique para selecionar'} onChange={handleFileChange} onDrop={handleDropFile}/>
                </div>
                <div className="w-full flex justify-center">
                    <div>
                        <button 
                        className="md:mx-10 px-5 xmd:px-10 sm:px-16 py-1 h-fit shadow-inner bg-green-simple shadow-black-light/30 outline-none text-white rounded-sm lg:text-lg hover:scale-95 transition-all duration-200" 
                        onClick={() => {handleSendFile()}}
                        >
                            <label className='h-full text-placeholder lg:text-lg overflow-hidden cursor-pointer font-medium'>
                                Enviar Alterações
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}