import {NavLink} from "react-router-dom";
import style from "../DialogItemContainer.module.css";
import {FC} from "react";
type PropsType = {
    id: number
    img: string
    name: string
}
const Dialog: FC <PropsType> = ({id,img,name}) => {
    return (
            <NavLink className={style.dialogs_items} to = {"/dialogs/"+id}>
                <div className = {style.item}>
                    <img src = {img}/>
                    {name}
                </div>
            </NavLink>
    );
}
export default Dialog;
