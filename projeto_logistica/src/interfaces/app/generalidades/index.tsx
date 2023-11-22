export interface IFormularioImpostos {
    id?: string | number
    transportadoraId?: string | number
    trt?: number | undefined
    tda?: number | undefined
    despacho?: number |undefined
    pegadio?: number | undefined
    gris?: number | undefined
    adVal?: number | undefined
    cam?: number | undefined
    prazo?: number | undefined
    adv?: number | undefined
    kg?: number | undefined
}

export interface ILinhaFormulario {
    nomeImposto: string,
    infoImposto: string,
    valorImposto: number
    onChangeValue?: any
}