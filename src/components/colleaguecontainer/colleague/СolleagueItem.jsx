import anonimavatar from "../../../img/anonimavatar.jpg";
import {NavLink} from "react-router-dom";
import React from "react";
import style from "./СolleagueItem.module.css"

const ColleagueItem = (props) => {
    return (
        <NavLink key={props.person.id} disabled={true} className={style.colleagueitemwrapper}
                 to={"/profile/" + props.person.id}>
            <div className={style.avadiscripyionblok}>
                    <div>
                        <img src={props.person.photos.small != null ? props.person.photos.small
                            : anonimavatar}/>
                    </div>
                    <div className={style.itemdiscription}>
                        <div></div>
                        <div>Фамилия: {props.person.name}</div>
                        <div>Страна:</div>
                        <div>Город:</div>
                    </div>
            </div>
<div className={style.buttonblok}>
    <button onClick={(e) => {
        e.preventDefault();
        props.removeColleagueThunkCreator(props.person.id)
    }}><b>Отставить</b>
    </button>
    <button className={style.buttonmessage}><b>Написать</b></button>
</div>
        </NavLink>
    )
}
export default ColleagueItem