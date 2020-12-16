import React from "react";
import {getAuthMe} from "./authenticationsReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const SETINITIALIZED = "SETINITIALIZED",
    CANCELEDINITIALIZED = "CANCELEDINITIALIZED";
type InitialStateType ={
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SETINITIALIZED:
            return {...state, initialized: true}
        case CANCELEDINITIALIZED:
            return {...state, initialized: false}
        default:
            return state;
    }
}
type ActionsTypes = SetInitializedSuccessActionType | SetInitializedСanceledActionType
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
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const initialezeApp = (): ThunkActionType => async (dispatch) => {
    await dispatch(getAuthMe());
    dispatch(setInitializedSuccess());
}

export default appReducer;