import React from "react";
import {connect} from "react-redux";
import DialogItem from "./DialogItem";

const mapStateToProps = (state) =>{
    return {
        dialogsData: state.messagesInformation.dialogsData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {  }
}
const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer;