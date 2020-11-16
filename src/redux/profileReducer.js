const ADDPOST = "ADDPOST",
      INPUTPOST = "INPUTPOST",
      SETPROFILE = "SETPROFILE";
let initialState = {
    postData: [
        {id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
        {id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
        {id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
    ],
    inputValue : ``,
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let temporaryState;
    switch(action.type){
        case ADDPOST:
            temporaryState = {
                ...state,
                inputValue: ``,
                postData: [...state.postData,{id: 11, text: state.inputValue, likescount: 0}]
            };
            return temporaryState;
        case INPUTPOST:
            temporaryState = {
                ...state,
                inputValue: action.postimput
            };
            return temporaryState;
        case SETPROFILE:
            return {...state,profile: action.profile}
        default:
            return state;
    }
}

export const addPost = () => {
    return {type: ADDPOST};
}
export const input = (text) => {
    return {type: INPUTPOST, postimput: text};
}
export const setProfile = (profile) => {
    return {type: SETPROFILE, profile};
}

export default profileReducer;