import React from "react";
import {sendNewMessageCreatorAction, inputCreatorAction} from "../../../../redux/messagesReducer";
import Newmessage from "./Newmessage";
import StoreContext from "../../../../redux/StoreContext";


const NewmessageContainer = () =>{
    return (
        <StoreContext.Consumer>
            {
                (store) =>{
                    const sendNewMessage = () => {
                        store.dispatch(sendNewMessageCreatorAction());
                    }
                    const input = (text) => {
                        store.dispatch(inputCreatorAction(text));
                    }
                    return (
                        <Newmessage sendNewMessage = {sendNewMessage} input = {input}
                                    inputValue = {store.getState().messagesInformation.inputValue} />
                    );
                }
            }
        </StoreContext.Consumer>)
}

export default NewmessageContainer;