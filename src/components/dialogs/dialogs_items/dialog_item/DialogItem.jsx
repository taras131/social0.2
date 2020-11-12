import Dialog from "./dialog/Dialog";
import React from "react";


const DialogItem = (props) => {
    let dialogsElements = props.dialogsData.map(item => {
        return (<Dialog id = {item.id} img = {item.url} name = {item.name} />)});
    return (
        <div>
            {dialogsElements}
        </div>
    );
}

export default DialogItem;