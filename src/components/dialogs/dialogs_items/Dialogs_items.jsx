import style from "./Dialogs_items.module.css";
import React from "react";
import DialogItemContainer from "./dialog_item/DialogItemContainer"

const Dialogs_items = () => {
    return (
        <div className = {style.dialogs_items} >
             <DialogItemContainer />
        </div>
    )
}

export default Dialogs_items;