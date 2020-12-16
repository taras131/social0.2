import React from "react";

const ADDERROR = "ADDERROR",
    REMOVEERROR = "REMOVEERROR";
const initialState = {
    isError: false
}
type InitialStateType = typeof initialState
const errorReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADDERROR:
            return {...state, isError: true}
        case REMOVEERROR:
            return {...state, isError: false}
        default:
            return state
    }
}
type ActionsTypes = AddErrorActionType | RemoveErrorActionType
export type AddErrorActionType = {
    type: typeof ADDERROR
}
export const addError = (): AddErrorActionType => {
    return {type: ADDERROR}
}
type RemoveErrorActionType = {
    type: typeof REMOVEERROR
}
export const removeError = (): RemoveErrorActionType => {
    return {type: REMOVEERROR}
}

export default errorReducer;