export interface IFormularioImpostos {
    id?: number
    transportadoraId?: number
    trt?: number | null
    tda?: number | null
    despacho?: number |null
    pegadio?: number | null
    gris?: number | null
    adVal?: number | null
    cam?: number | null
    prazo?: number | null
    adv?: number | null
    kg?: number | null
}

export interface ILinhaFormulario {
    nomeImposto: string,
    infoImposto: string,
    valorImposto: number
    onChangeValue?: any
}

export interface ITransportadora {
    id: number,
    nome: string
}