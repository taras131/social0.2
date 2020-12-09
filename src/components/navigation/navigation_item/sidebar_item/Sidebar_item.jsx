import style from "./Sidebar_item.module.css";
import anonimavatar from "../../../../img/anonimavatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

const Sidebaritem = (props) => {
    return (
        <NavLink disabled={true} className={style.item} to={"/profile/" + props.id}>
            <div>
                <img src={props.img != null ? props.img
                    : anonimavatar}/>
            </div>
            <div>
                {props.name}
            </div>
        </NavLink>
    );
}

export default Sidebaritem;