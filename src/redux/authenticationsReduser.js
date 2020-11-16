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
           // console.log(action.data);
            return {...state, ...action.data, isAuthentications:true }
        default:
            return state;
    }
}

export const setPerson = (personId, email, login) => {
    return {type: SETPERSON, data: {personId, email, login}}
}

export default authenticationsReduser;