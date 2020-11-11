import style from "./Message_item.module.css";

const Message_item = (props) => {
    return (
        <div className = {style.messages_item}>
            {props.text} 
        </div>
    );
}

export default Message_item;