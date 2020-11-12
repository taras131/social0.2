import React from "react";
import {connect} from "react-redux";
import Message_item from "./Message_item";

const mapStateToProps = (state) =>{
    return {
        messagesData: state.messagesInformation.messagesData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {  }
}
const Message_itemContainer = connect(mapStateToProps, mapDispatchToProps)(Message_item);

export default Message_itemContainer;