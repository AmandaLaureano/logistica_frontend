export interface IFormularioImpostos {
    id?: number
    transportadoraId?: number
    trt?: number | undefined
    tda?: number | undefined
    despacho?: number |undefined
    pedagio?: number | undefined
    gris?: number | undefined
    adVal?: number | undefined
    cam?: number | undefined
    prazo?: number | undefined
    adv?: number | undefined
    kg?: number | undefined
    params:  number | undefined
    nomeTransportadora?: string
}

export interface ILinhaFormulario {
    nomeImposto: string,
    infoImposto: string,
    valorImposto: number | undefined,
    onChangeValue?: any
    onValueChange?: any
}

export interface ITransportadora {
    id: number,
    nome: string
}