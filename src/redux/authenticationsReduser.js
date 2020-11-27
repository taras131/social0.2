import {APIHeader} from "../api/api";

const SETPERSON = "SETPERSON",
      OUTPERSON = "OUTPERSON";

let initialState = {
    authenticationsData: {
        personId: null,
        email: null,
        login: null
    },
    isAuthentications: false
}

const authenticationsReduser = (state = initialState, action) => {
    switch (action.type){
        case SETPERSON:
            console.log(action.login)
            return {...state, authenticationsData: {personId: action.personId,
                    email: action.email,login: action.login},  isAuthentications: true }
        case OUTPERSON:
            return {...state, authenticationsData: {personId: null, email: null, login: null}, isAuthentications: false}
        default:
            return state;
    }
}
export const setPerson = (personId, email, login) => {
    return {type: SETPERSON, personId, email, login}
}
export const outPerson = () => {
    return {type: OUTPERSON}
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
                console.log(data.data.resultCode)
                dispatch(setPerson(data.data.id, formData.login, data.data.id))
            }
        })
    }
}
export const loginOut = (formData) => {
    return dispatch => {
        APIHeader.loginOut().then(data => {
            if(data.data.resultCode === 0) {
                dispatch(outPerson());
            }
        })
    }
}

export default authenticationsReduser;