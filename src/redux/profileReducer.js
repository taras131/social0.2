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
    switch(action.type){
        case ADDPOST:
            let newPost = {
                id:11,
                text: state.inputValue,
                likescount: 0
            }
            state.postData.push(newPost);
            state.inputValue = ``;			
            return state;
        case INPUTPOST:
            state.inputValue = action.postimput;	
            return state;
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