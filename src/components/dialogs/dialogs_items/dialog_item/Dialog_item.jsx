import style from "./Dialog_item.module.css";
import { NavLink } from "react-router-dom";

const Dialog_item = (props) => {
    return (
        <NavLink to = {"/dialogs/"+props.id}>
                <div className = {style.item}>
                    <img src = {props.img}/>
                    {props.name}
                </div>
        </NavLink>   
    );
}

export default Dialog_item;