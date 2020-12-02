import React from "react";
import {getAuthMe} from "./authenticationsReducer";

const SETINITIALIZED = "SETINITIALIZED",
    CANCELEDINITIALIZED = "CANCELEDINITIALIZED";
let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETINITIALIZED:
            return {...state, initialized: true}
        case CANCELEDINITIALIZED:
            return {...state, initialized: false}
        default:
            return state;
    }
}
export const setInitializedSuccess = () => {
    return {type: SETINITIALIZED}
}
export const setInitializedСanceled = () => {
    return {type: CANCELEDINITIALIZED}
}
export const initialezeApp = () => async (dispatch) => {
    await dispatch(getAuthMe());
    dispatch(setInitializedSuccess());
}

export default appReducer;