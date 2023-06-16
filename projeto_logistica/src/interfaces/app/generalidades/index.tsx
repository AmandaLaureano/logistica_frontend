interface ITaxForms {
    id?: string | number
    transportadoraId?: string | number
    trt?: number | undefined
    tda?: number | undefined
    despacho?: number |undefined
    pegadio?: number | undefined
    gris?: number | undefined
    adVal?: number | undefined
    cam?: number | undefined
}

interface ILinesTaxForms {
    field: string,
    valueField: number
    minValueField: number
    onChangeValue?: any
    onChangeValueMin?:any
}