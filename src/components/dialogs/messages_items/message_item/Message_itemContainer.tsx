import React, {FC} from "react";
import Message from "./message/Message";
import {MessagesType} from "../../../../types/Types";
import {compose} from "redux";
import {connect} from "react-redux";
import AuthenticationRedirectHOC from "../../../../hoc/AuthenticationRedirectHOC";
import {AppStateType} from "../../../../redux/reduxStore";

type PropsType = {
    messagesData: Array<MessagesType>
}
const Message_itemContainer: FC <PropsType>  = ({messagesData}) => {
    let messagesElements = messagesData.map(item => {
        return (<Message text = {item.text} key = {item.id} />)});
    return (
        <div>
            {messagesElements}
        </div>
    );
}
const mapStateToProps = (state: AppStateType) =>{
    return {
        messagesData: state.dialogsInformation.messagesData
    }
}
export default compose(
    connect(mapStateToProps),
    AuthenticationRedirectHOC
)(Message_itemContainer)