import {APIHeader} from "../api/api";
import {stopSubmit} from "redux-form";

const SETPERSON = "SETPERSON";
let initialState = {
    authenticationsData: {
        personId: null,
        email: null,
        login: null
    },
    isAuthentications: false
}
const authenticationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPERSON:
            console.log(action.login)
            return {
                ...state, authenticationsData: {
                    personId: action.personId,
                    email: action.email, login: action.login
                }, isAuthentications: action.isAuthentications
            }
        default:
            return state;
    }
}
export const setPerson = (personId, email, login, isAuthentications) => {
    return {type: SETPERSON, personId, email, login, isAuthentications}
}
export const getAuthMe = () => async (dispatch) => {
    let response = await APIHeader.getAuthMe();
    if (response.resultCode === 0) {
        dispatch(setPerson(response.data.id, response.data.email, response.data.login, true))
    }
}
export const login = (formData) => async (dispatch) => {
    let response = await APIHeader.login(formData);
    if (response.data.resultCode === 0) {
        dispatch(getAuthMe());
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

export default authenticationsReducer;