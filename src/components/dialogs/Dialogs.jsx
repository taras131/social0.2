import style from "./Dialogs.module.css";
import Message_items from "./messages_items/Message_items";
import React, {FC} from "react";
import DialogItemContainer from "./dialogs_items/DialogItemContainer";


const Dialogs = () => {
    return (
        <div className = {style.dialogs}>
            <DialogItemContainer />
            <Message_items />
        </div>
    );
}

export default Dialogs;