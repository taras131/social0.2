import anonimavatar from "../../../img/anonimavatar.jpg";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";
import style from "./СolleagueItem.module.css"
import {PersonsType} from "../../../types/Types";

type PropsType = {
    person: PersonsType
    removeColleagueThunkCreator: (id:number) => void
}

const ColleagueItem: FC<PropsType> = ({person,removeColleagueThunkCreator}) => {
    return (
        <NavLink key={person.id} className={style.colleagueitemwrapper} to={"/profile/" + person.id}>
            <div className={style.avadiscripyionblok}>
                    <div>
                        <img src={person.photos.small != null ? person.photos.small
                            : anonimavatar}/>
                    </div>
                    <div className={style.itemdiscription}>
                        <div></div>
                        <div>Фамилия: {person.name}</div>
                        <div>Страна:</div>
                        <div>Город:</div>
                    </div>
            </div>
<div className={style.buttonblok}>
    <button onClick={(e) => {
        e.preventDefault();
        removeColleagueThunkCreator(person.id)
    }}><b>Отставить</b>
    </button>
    <button className={style.buttonmessage}><b>Написать</b></button>
</div>
        </NavLink>
    )
}
export default ColleagueItem