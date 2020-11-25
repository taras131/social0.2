import {APIHeader} from "../api/api";

const SETPERSON = "SETPERSON";

let initialState = {
    personId: null,
    email: null,
    login: null,
    isAuthentications: false
}

const authenticationsReduser = (state = initialState, action) => {
    switch (action.type){
        case SETPERSON:
            return {...state, ...action.data, isAuthentications:true }
        default:
            return state;
    }
}
export const setPerson = (personId, email, login) => {
    return {type: SETPERSON, data: {personId, email, login}}
}
export const getAuthMe = () => {
    return dispatch => {
        APIHeader.getAuthMe().then(data => {
            if (data.resultCode ===0){
                dispatch(setPerson(data.data.id, data.data.email, data.data.login))
            }
        });
    }
}
export const login = (formData) => {
    return dispatch => {
        APIHeader.login(formData).then(data => {
            console.log(data.data.resultCode);
            if(data.data.resultCode === 0) {
                dispatch(setPerson(data.data.id, formData.login, data.data.id))
            }
        })
    }
}

export default authenticationsReduser;