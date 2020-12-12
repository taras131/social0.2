import React from "react";
import {getAuthMe} from "./authenticationsReducer";

const SETINITIALIZED = "SETINITIALIZED",
    CANCELEDINITIALIZED = "CANCELEDINITIALIZED";
type InitialStateType ={
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SETINITIALIZED:
            return {...state, initialized: true}
        case CANCELEDINITIALIZED:
            return {...state, initialized: false}
        default:
            return state;
    }
}
type SetInitializedSuccessActionType = {
    type: typeof SETINITIALIZED
}
export const setInitializedSuccess = (): SetInitializedSuccessActionType => {
    return {type: SETINITIALIZED}
}
type SetInitializedСanceledActionType = {
    type: typeof CANCELEDINITIALIZED
}
export const setInitializedСanceled = (): SetInitializedСanceledActionType => {
    return {type: CANCELEDINITIALIZED}
}
export const initialezeApp = () => async (dispatch: any) => {
    await dispatch(getAuthMe());
    dispatch(setInitializedSuccess());
}

export default appReducer;