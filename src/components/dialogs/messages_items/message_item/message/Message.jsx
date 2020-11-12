import React from "react";
import style from "../Message_item.module.css";

const Message = (props) => {
    return (
        <div className={style.messages_item}>
            {props.text}
        </div>
    )
}

export default Message;