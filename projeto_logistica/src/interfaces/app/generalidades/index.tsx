export interface IFormularioImpostos {
    id: string
    transportadoraId: string
    trt: string 
    tda: string 
    despacho: string 
    pedagio: string 
    gris: string 
    adVal: string 
    cam: string 
    prazo: string 
    adv: string 
    kg: string 
    params:  string
}

export interface ILinhaFormulario {
    nomeImposto: string
    infoImposto: string
    valorImposto: string
    onChange?: any
    children?: React.ReactNode
    mask: string
    placeholder: string
    invalidField: boolean
}

export interface ITransportadora {
    id: number
    nome: string
}