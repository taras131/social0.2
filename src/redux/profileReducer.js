let initialState = {
    postData: [
        {id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
        {id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
        {id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
    ],
    inputValue : ``
}

const profileReducer = (state = initialState, action) => {
    const ADDPOST = "ADDPOST",
          INPUTPOST = "INPUTPOST";
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
        default:
            return state;
    }
}

export const addPostCreatioAction = () => {
    return {type: "ADDPOST"};
}
export const inputCreatioAction = (text) => {
    return {type: "INPUTPOST", postimput: text};
}

export default profileReducer;