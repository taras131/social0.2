import style from "../Persons.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Person = (props) => {
    return (<NavLink disabled={true}
                     className={style.person} to={"/profile/" + props.person.id}>
            <div key={props.person.id}>
                <div>
                    <div className={style.personinformation}>
                        <div>
                            <img src={props.person.photos.small != null ? props.person.photos.small
                                : "https://yt3.ggpht.com/a/AATXAJx8MagglWeof2zL5R6Shk3KU8mmthN1Pl5Of0ih=s900-c-k-c0xffffffff-no-rj-mo"}/>
                        </div>
                        <div className={style.data}>
                            <div></div>
                            <div>Фамилия: {props.person.name}</div>
                            <div>Страна:</div>
                            <div>Город:</div>
                        </div>
                    </div>
                </div>
                <div className={style.button}>
                    {props.person.followed
                        ? <button disabled={props.ColleagueInProgress.some(id => id === props.person.id)}
                                  className={style.buttonremove} onClick={(e) => {
                            e.preventDefault();
                            props.removeColleagueThunkCreator(props.person.id)
                        }}>выгнать</button>
                        : <button disabled={props.ColleagueInProgress.some(id => id === props.person.id)}
                                  className={style.buttonadd} onClick={(e) => {
                            e.preventDefault();
                            props.addColleagueThunkCreator(props.person.id);
                        }}>в коллеги</button>}
                </div>
            </div>
        </NavLink>
    )
}

export default Person;