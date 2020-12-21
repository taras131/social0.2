
export const requiredField = (value: string) => {
    if(value){
        return undefined
    } else {
        return "Field is required"
    }
}
export const maxLength = (maxLenght: number) => (value: string) => {
    if(value.length > maxLenght){
        return `Max length is ${maxLenght} symbol`
    } else {
        return undefined
    }
}