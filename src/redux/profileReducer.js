import {APIProfile} from "../api/api";

const ADDPOST = "ADDPOST",
      INPUTPOST = "INPUTPOST",
      SETPROFILE = "SETPROFILE",
      SETSTATUS = "SETSTATUS";
let initialState = {
    postData: [
        {id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
        {id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
        {id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    let temporaryState;
    switch(action.type){
        case ADDPOST:
            temporaryState = {
                ...state,
                postData: [...state.postData,{id: 11, text: action.text, likescount: 0}]
            };
            return temporaryState;
        case SETPROFILE:
            return {...state,profile: action.profile}
        case SETSTATUS:
            return {...state,status: action.status}
        default:
            return state;
    }
}
export const addPost = (text) => {return {type: ADDPOST,text};}
export const input = (text) => {return {type: INPUTPOST, postimput: text};}
export const setProfile = (profile) => {return {type: SETPROFILE, profile};}
export const setStatus = (status) => {return {type: SETSTATUS, status}}
export const getProfile = (id) => {
    return dispatch => {
        if(!id) id = 12594
        APIProfile.getProfile(id).then(data => {dispatch(setProfile(data))});
    }
}
export const getMyStatus = (id) => {
    return dispatch => {
        APIProfile.getMyStatusAPI(id).then(response => {
            dispatch(setStatus(response.data))})
    }
}
export const updateMyStatus = (status) => {
    return dispatch => {
        APIProfile.updateMyStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;