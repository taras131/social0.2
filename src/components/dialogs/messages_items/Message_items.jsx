import style from "./Message_items.module.css";
import NewmessageContainer from "./newmessage/NewmessageContainer";
import Message_itemContainer from "./message_item/Message_itemContainer";

const Message_items = (props) =>{
    return (
        <div className = {style.messages}>
            <div>
             <Message_itemContainer />
            </div>
           <NewmessageContainer />
        </div>
    );
}

export default Message_items;