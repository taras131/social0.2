import React from "react";
import {getAuthMe} from "./authenticationsReducer";

const SETINITIALIZED = "SETINITIALIZED";
let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) =>{
    switch (action.type){
        case SETINITIALIZED:
            console.log("true")
            return {...state, initialized: true}
        default:
            return state;
    }
}
export const setInitializedSuccess = () => {return {type: SETINITIALIZED}}
export const initialezeApp = () =>{
    return dispatch => {
        let promise = dispatch(getAuthMe())
        promise.then( () => {
            dispatch(setInitializedSuccess())
        })
    }
}
export default appReducer;