import React from "react";
import {sendNewMessage} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";
import NewmessageForm from "./Newmessage";

const Newmessage = (props) => {
    const onSubmit = (formData) => {
        props.sendNewMessage(formData.newMessage);
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