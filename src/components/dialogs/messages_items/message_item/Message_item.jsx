import style from "./Message_item.module.css";
import React from "react";
import Message from "./message/Message";

const Message_item = (props) => {
    let messagesElements = props.messagesData.map(item => {
        return (<Message text = {item.text} key = {item.id} count = {item.likescount} />)});
    return (
        <div>
            {messagesElements}
        </div>
    );
}

export default Message_item;