export const requiredField = velue => {
    if(velue){
        return undefined
    } else {
        return "Field is required"
    }
}
export const maxLength = (maxLenght) => velue => {
    if(velue.length > maxLenght){
        return `Max length is ${maxLenght} symbol`
    } else {
        return undefined
    }
}