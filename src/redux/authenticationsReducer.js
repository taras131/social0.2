import {APIHeader, APISecurity} from "../api/api";
import {stopSubmit} from "redux-form";

const SETPERSON = "SETPERSON",
    SETCAPTCHAURL = "SETCAPTCHAURL";
let initialState = {
    authenticationsData: {
        personId: null,
        email: null,
        login: null
    },
    isAuthentications: false,
    captchaURL: null
}
const authenticationsReducer = (state = initialState, action) => {
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
export const setPerson = (personId, email, login, isAuthentications) => {
    return {type: SETPERSON, personId, email, login, isAuthentications}
}
export const setCaptchaURL = (url) => {
    return {type: SETCAPTCHAURL, url}
}
export const getAuthMe = () => async (dispatch) => {
    let response = await APIHeader.getAuthMe();
    if (response.resultCode === 0) {
        dispatch(setPerson(response.data.id, response.data.email, response.data.login, true))
    }
}
export const login = (formData) => async (dispatch) => {
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

export const loginOut = () => async (dispatch) => {
    let response = await APIHeader.loginOut();
    if (response.data.resultCode === 0) {
        dispatch(setPerson(null, null, null, false));
    }
}
export const getCaptchaURL = () => async (dispatch) => {
    let response = await APISecurity.getCapchaURL();
    const captchaURL = response.data.url;
    dispatch(setCaptchaURL(captchaURL));
}

export default authenticationsReducer;