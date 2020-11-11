const profileReducer = (state,action) => {
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