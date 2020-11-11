import style from "./Dialogs_items.module.css";
import Dialog_item from "./dialog_item/Dialog_item";
import { Route, NavLink } from "react-router-dom";

const Dialogs_items = (props) => {

    let dialogsElements = props.dialogsData.map(item => <Dialog_item id = {item.id} img = {item.url} name = {item.name} />);
  
    return (
        <div className = {style.dialogs_items} >
            <div>
                {dialogsElements}
            </div>            
        </div>

    )
}

export default Dialogs_items;