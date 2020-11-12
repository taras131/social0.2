import style from "./Dialogs.module.css";
import Dialogs_items from "./dialogs_items/Dialogs_items";
import Message_items from "./messages_items/Message_items";

const Dialogs = () => {
    return (
        <div className = {style.dialogs}>
            <Dialogs_items />
            <Message_items />
        </div>
    );
}

export default Dialogs;