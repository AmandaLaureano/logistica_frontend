export interface ITaxForms {
    id?: string | number
    transportadoraId?: string | number
    trt?: number | undefined
    tda?: number | undefined
    despacho?: number |undefined
    pedagio?: number | undefined
    gris?: number | undefined
    adVal?: number | undefined
    cam?: number | undefined
}

export interface ILinesTaxForms {
    field: string,
    valueField: number
    minValueField: number
    onChangeValue?: any
    onChangeValueMin?:any
}