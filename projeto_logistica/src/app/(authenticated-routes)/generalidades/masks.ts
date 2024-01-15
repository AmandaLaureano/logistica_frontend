export function reais (e: React.FormEvent<HTMLInputElement>): string{
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")

    return value
}

export function porcentagem (e: React.FormEvent<HTMLInputElement>): string {
    e.currentTarget.maxLength = 3
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    e.currentTarget.value = value
    
    return value
}