import anonimavatar from "../../../img/anonimavatar.jpg";
import {NavLink} from "react-router-dom";
import React from "react";
import style from "./СolleagueItem.module.css"

const ColleagueItem = (props) => {
    return (
        <NavLink disabled={true} className={style.colleagueitemwrapper} to={"/profile/" + props.person.id}>
            <div key={props.person.id}>
                <div>
                    <div>
                        <div>
                            <img src={props.person.photos.small != null ? props.person.photos.small
                                : anonimavatar}/>
                        </div>
                        <div>
                            <div></div>
                            <div>Фамилия: {props.person.name}</div>
                            <div>Страна:</div>
                            <div>Город:</div>
                        </div>
                    </div>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.removeColleagueThunkCreator(props.person.id)
                }}>выгнать
                </button>

            </div>

        </NavLink>
    )
}
export default ColleagueItem