'use client'
import { DragAndDrop } from "@/src/components/drag-and-drop"
import Linha from "./linha-formulario"
import { api } from "@/src/services/api"
import { IFormularioImpostos } from "../../../interfaces/app/generalidades"
import { useState } from "react"
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
        
        setValues(prevState => ({
            ...prevState,
            [key]: value,
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
            
            window.sessionStorage.setItem("fretefy", res.data.fretefy)
            window.sessionStorage.setItem("vtex", res.data.vtex)

            setTimeout(() =>{
                router.push(`/downloads/${params}`)
            }, 1000)
            
        }
        catch(err){
            console.log('Erro ao processar arquivo', err)
            Swal.fire({
                icon: 'error',
                title: 'Erro ao processar o arquivo',
                text: 'Somente arquivos da transportadora correspondente devem ser anexados',
                confirmButtonText: "OK",
                confirmButtonColor: "#509D45"
            })
            handleRemoveFile()
        }
    }

    const sendAllRequests = async () =>{
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

            Swal.close()
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
            <Linha
            nomeImposto={"TRT"} 
            infoImposto={"Taxa de Restrição de Trânsito"} 
            valorImposto={values.trt}
            onChange={(newValue: any) => handleChange('trt', newValue)}
            mask={'reais'}
            placeholder="0.00" 
            >   
                <Tooltip title="Imposto em reais" placement="top" arrow>
                    <button>
                        <MdAttachMoney className="w-5 h-5 fill-green-simple"/> 
                    </button>
                </Tooltip>
            </Linha>

            <Linha 
            nomeImposto={"TDA"} 
            infoImposto={"Taxa de Difícil Acesso"} 
            valorImposto={values.tda}
            onChange={(newValue: any) => handleChange('tda', newValue)}
            mask={'reais'}
            placeholder="0.00"
            >
                <Tooltip title="Imposto em reais" placement="top" arrow>
                    <button>
                        <MdAttachMoney className="w-5 h-5 fill-green-simple"/> 
                    </button>
                </Tooltip>      
            </Linha>

            <Linha
            nomeImposto={"TAXA DE DESPACHO"} 
            infoImposto={""} 
            valorImposto={values.despacho}
            mask={'reais'}
            placeholder="0.00"
            onChange={(newValue: any) => handleChange('despacho', newValue)}
            >
                <Tooltip title="Imposto em reais" placement="top" arrow>
                    <button>
                        <MdAttachMoney className="w-5 h-5 fill-green-simple"/> 
                    </button>
                </Tooltip>
            </Linha>

            <Linha
            nomeImposto={"PEDÁGIO"} 
            infoImposto={""} 
            valorImposto={values.pedagio}
            onChange={(newValue: any) => handleChange('pedagio', newValue)}
            mask={'reais'}
            placeholder="0.00"
            >
                <Tooltip title="Imposto em reais" placement="top" arrow>
                    <button>
                        <MdAttachMoney className="w-5 h-5 fill-green-simple"/> 
                    </button>
                </Tooltip> 
            </Linha>

            <Linha
            nomeImposto={"GRIS"} 
            infoImposto={"Gerenciamento de Riscos"} 
            valorImposto={values.gris}
            onChange={(newValue: any) => handleChange('gris', newValue)}
            mask={'porcentagem'}
            placeholder="0"
            >
                <Tooltip title="Imposto em porcentagem" placement="top" arrow>
                    <button>
                        <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>
                    </button>
                </Tooltip> 
            </Linha>

            <Linha
            nomeImposto={"ADVAL"} 
            infoImposto={""} 
            valorImposto={values.adVal}
            onChange={(newValue: any) => handleChange('adVal', newValue)}
            mask={'porcentagem'}
            placeholder="0"
            >
                <Tooltip title="Imposto em porcentagem" placement="top" arrow>
                    <button>
                        <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>
                    </button>
                </Tooltip> 
            </Linha>

            <Linha
            nomeImposto={"CAM"} 
            infoImposto={"Custo Adicional de Manuseio e Separação"} 
            valorImposto={values.cam}
            onChange={(newValue: any) => handleChange('cam', newValue)}
            mask={'porcentagem'}
            placeholder="0" 
            >
                <Tooltip title="Imposto em porcentagem" placement="top" arrow>
                    <button>
                        <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>
                    </button>
                </Tooltip>
            </Linha>

            <Linha
            nomeImposto={"PRAZO"} 
            infoImposto={"SBA"} 
            valorImposto={values.prazo}
            onChange={(newValue: any) => handleChange('prazo', newValue)} 
            mask={'porcentagem'}
            placeholder="0"
            >
                <Tooltip title="Prazo SBA em dias" placement="top" arrow>
                    <button>
                        <TbCalendarTime className="w-5 h-5 stroke-green-simple" />
                    </button>
                </Tooltip>
            </Linha>

            <Linha
            nomeImposto={"ADV"} 
            infoImposto={"SBA"} 
            valorImposto={values.adv}
            onChange={(newValue: any) => handleChange('adv', newValue)}
            mask={'porcentagem'}
            placeholder="0" 
            >
                <Tooltip title="Imposto SBA em porcentagem" placement="top" arrow>
                    <button>
                        <AiOutlinePercentage className="w-5 h-5 fill-black/60"/>
                    </button>
                </Tooltip>
            </Linha>

            <Linha
            nomeImposto={"KG"} 
            infoImposto={"SBA"} 
            valorImposto={values.kg}
            onChange={(newValue: any) => handleChange('kg', newValue)}
            mask={'reais'}
            placeholder="0.00" 
            >
                <Tooltip title="Imposto em reais" placement="top" arrow>
                    <button>
                        <MdAttachMoney className="w-5 h-5 fill-green-simple"/> 
                    </button>
                </Tooltip>
            </Linha>
            
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