const messagesReducer = (state,action) => {
    const  ADDMESSAGE = "ADDMESSAGE",
           MESSAGEINPUT = "MESSAGEINPUT";
    switch(action.type) {
        case ADDMESSAGE:
            let newMessage = {
                id:5,
                text: state.inputValue,
                likescount: 0
            }
            state.messagesData.push(newMessage);
            state.inputValue = ``;
            return state;
        case MESSAGEINPUT:
            state.inputValue = action.messageimput;	
            return state;
        default:
            return state;
    }
}

export const sendNewMessageCreatorAction = () => {
    return {type: "ADDMESSAGE"};
}
export const inputCreatorAction = (text) => {
    return {type: "MESSAGEINPUT", messageimput: text };
}

export default messagesReducer;