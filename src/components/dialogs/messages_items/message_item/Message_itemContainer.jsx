import React from "react";
import {connect} from "react-redux";
import Message_item from "./Message_item";
import AuthenticationRedirectHOC from "../../../../hoc/AuthenticationRedirectHOC";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    return {
        messagesData: state.messagesInformation.messagesData
    }
}

export default compose(
    connect(mapStateToProps),
    AuthenticationRedirectHOC
)(Message_item)