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
    switch (action.type){
        case SETPERSON:
            console.log(action.login)
            return {...state, authenticationsData: {personId: action.personId,
                    email: action.email,login: action.login},  isAuthentications: action.isAuthentications }
        default:
            return state;
    }
}
export const setPerson = (personId, email, login, isAuthentications) => {
    return {type: SETPERSON, personId, email, login, isAuthentications}
}
export const getAuthMe = () => {
    return dispatch => {
        return APIHeader.getAuthMe().then(data => {
            if (data.resultCode ===0){
                dispatch(setPerson(data.data.id, data.data.email, data.data.login, true))
            }
        });
    }
}
export const login = (formData) => {
    return dispatch => {
        APIHeader.login(formData).then(data => {
            console.log(data.data.resultCode);
            if(data.data.resultCode === 0) {
                dispatch(getAuthMe());
            } else {
                let action = stopSubmit("login", {_error: "login or password is wrong"});
                dispatch(action);
            }
        })
    }
}
export const loginOut = () => {
    return dispatch => {
        APIHeader.loginOut().then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setPerson(null, null, null, false));
            }
        })
    }
}

export default authenticationsReducer;