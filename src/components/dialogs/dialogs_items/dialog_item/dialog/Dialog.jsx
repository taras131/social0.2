import {NavLink} from "react-router-dom";
import style from "../DialogItem.module.css";

const Dialog = (props) => {
    return (
        <div>
            <NavLink to = {"/dialogs/"+props.id}>
                <div className = {style.item}>
                    <img src = {props.img}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default Dialog;
