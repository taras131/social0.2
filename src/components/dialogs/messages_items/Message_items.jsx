import style from "./Message_items.module.css";
import NewmessageContainer from "./newmessage/NewmessageContainer";
import Message_itemContainer from "./message_item/Message_itemContainer";
import React, {FC} from "react";
type PropsTypes = {

}
const Message_items: FC<PropsTypes> = (props) => {
    return (
        <div className={style.messages}>
            <Message_itemContainer />
            <NewmessageContainer />
        </div>
    );
}

export default Message_items;