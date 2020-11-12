import React from "react";
import {sendNewMessageCreatorAction, inputCreatorAction} from "../../../../redux/messagesReducer";
import Newmessage from "./Newmessage";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        inputValue: state.messagesInformation.inputValue
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        sendNewMessage: () => {
            dispatch(sendNewMessageCreatorAction());
        },
        input: (text) => {
            dispatch(inputCreatorAction(text));
        }
    }
}
const NewmessageContainer = connect(mapStateToProps,mapDispatchToProps)(Newmessage);

export default NewmessageContainer;