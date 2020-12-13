import React, {FC} from "react";
import {sendNewMessage} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import NewmessageForm from "./Newmessage";
import {reset} from "redux-form";
import {AppStateType} from "../../../../redux/reduxStore";


type PropsType = {
    sendNewMessage: (newMessage: string) => void
}
const NewmessageContainer: FC <PropsType> = ({sendNewMessage}) => {
    const onSubmit = (formData: any,dispatch: any) => {
        sendNewMessage(formData.newMessage);
        dispatch(reset("addNewMessage"));
    }
    return(
        <NewmessageForm onSubmit ={onSubmit} />
    )
}
const mapStateToProps = (state: AppStateType) =>{
    return {

    }
}
export default connect(mapStateToProps, {sendNewMessage})(NewmessageContainer);
