export interface IFormularioImpostos {
    id: number
    transportadoraId: number
    trt: number 
    tda: number 
    despacho: number 
    pedagio: number 
    gris: number 
    adVal: number 
    cam: number 
    prazo: number 
    adv: number 
    kg: number 
    params:  number
}

export interface ILinhaFormulario {
    nomeImposto: string,
    infoImposto: string,
    valorImposto: number,
    onChange?: any,
    children?: React.ReactNode,
    mask: string,
    placeholder: string
}

export interface ITransportadora {
    id: number,
    nome: string
}