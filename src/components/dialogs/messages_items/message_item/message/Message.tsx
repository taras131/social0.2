import React, {FC} from "react";
import style from "../Message_item.module.css";
type PropsType = {
    text: string
}
const Message: FC <PropsType> = ({text}) => {
    return (
        <div className={style.messages_item}>
            {text}
        </div>
    )
}

export default Message;