import {APIHeader, APISecurity} from "../api/api";
import {stopSubmit} from "redux-form";

const SETPERSON = "SETPERSON",
    SETCAPTCHAURL = "SETCAPTCHAURL";

let initialState = {
    authenticationsData: {
        personId: null as null | number,
        email: null as null | string,
        login: null as null | string
    },
    isAuthentications: false,
    captchaURL: null as null | string
}
type InitialStatType = typeof initialState
const authenticationsReducer = (state = initialState, action: any): InitialStatType => {
    switch (action.type) {
        case SETPERSON:
            return {
                ...state, authenticationsData: {
                    personId: action.personId,
                    email: action.email, login: action.login
                }, isAuthentications: action.isAuthentications
            }
        case SETCAPTCHAURL:
            return {
                ...state, captchaURL: action.url}
        default:
            return state;
    }
}
type SetPersonActionType ={
    type: typeof SETPERSON
    personId: number | null
    email: string | null
    login: string | null
    isAuthentications: boolean
}
export const setPerson = (personId: number | null, email: string | null, login: string | null,
                          isAuthentications: boolean):SetPersonActionType => {
    return {type: SETPERSON, personId, email, login, isAuthentications}
}
type SetCaptchaURLAction = {
    type: typeof SETCAPTCHAURL
    url: string
}
export const setCaptchaURL = (url: string):SetCaptchaURLAction => {
    return {type: SETCAPTCHAURL, url}
}
export const getAuthMe = () => async (dispatch: any) => {
    let response = await APIHeader.getAuthMe();
    if (response.resultCode === 0) {
        dispatch(setPerson(response.data.id, response.data.email, response.data.login, true))
    }
}
export const login = (formData: any) => async (dispatch: any) => {
    let response = await APIHeader.login(formData);
    console.log(response.data)
    if (response.data.resultCode === 0) {
        dispatch(getAuthMe());
    } if(response.data.resultCode === 10){
        dispatch(getCaptchaURL());
    } else {
        let action = stopSubmit("login", {_error: "login or password is wrong"});
        dispatch(action);
    }
}

export const loginOut = () => async (dispatch: any) => {
    let response = await APIHeader.loginOut();
    if (response.data.resultCode === 0) {
        dispatch(setPerson(null, null, null, false));
    }
}
export const getCaptchaURL = () => async (dispatch: any) => {
    let response = await APISecurity.getCapchaURL();
    const captchaURL = response.data.url;
    dispatch(setCaptchaURL(captchaURL));
}

export default authenticationsReducer;