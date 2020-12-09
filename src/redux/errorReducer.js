import React from "react";

const ADDERROR = "ADDERROR",
    REMOVEERROR = "REMOVEERROR";
const initialState = {
    isError: false
}
const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDERROR:
            return {...state, isError: true}
        case REMOVEERROR:
            return {...state, isError: false}
        default:
            return state
    }
}
export default errorReducer;

export const addError = () => {
    return {type: ADDERROR}
}
export const removeError = () => {
    console.log("click remove")
    return {type: REMOVEERROR}
}