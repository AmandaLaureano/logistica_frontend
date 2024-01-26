export function ValorDecimal (e: React.FormEvent<HTMLInputElement>): string{
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")

    return value
}

export function ValorInteiro (e: React.FormEvent<HTMLInputElement>): string {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '').slice(0, 3)
    e.currentTarget.value = value
    
    return value
}