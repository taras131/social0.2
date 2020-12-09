import React from "react";
import {sendNewMessage} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";
import NewmessageForm from "./Newmessage";
import {reset} from "redux-form";

const Newmessage = (props) => {
    const onSubmit = (formData,dispatch) => {
        props.sendNewMessage(formData.newMessage);
        dispatch(reset("addNewMessage"));
    }
    return(
        <NewmessageForm onSubmit ={onSubmit} />
    )
}
const mapStateToProps = (state) =>{
    return { }
}
const NewmessageContainer = connect(mapStateToProps, {sendNewMessage})(Newmessage);

export default NewmessageContainer;