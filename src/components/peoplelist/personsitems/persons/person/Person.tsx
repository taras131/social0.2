import style from "../Persons.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import anonimavatar from"../../../../../img/anonimavatar.jpg"
import {PersonsType, ProfileType} from "../../../../../types/Types";

type PropsType = {
    person : PersonsType
    ColleagueInProgress: Array<number>
    removeColleagueThunkCreator: (id: number) => void
    addColleagueThunkCreator: (person : PersonsType) => void
}
const Person: React.FC<PropsType> = ({person,ColleagueInProgress,removeColleagueThunkCreator, addColleagueThunkCreator}) => {
    return (<NavLink className={style.person} to={"/profile/" + person.id}>
            <div key={person.id}>
                <div>
                    <div className={style.personinformation}>
                        <div>
                            <img src={person.photos.small != null ? person.photos.small
                                : anonimavatar}/>
                        </div>
                        <div className={style.data}>
                            <div>Фамилия: {person.name}</div>
                            <div>Страна:</div>
                            <div>Город:</div>
                        </div>
                    </div>
                </div>
                <div className={style.button}>
                    {person.followed
                        ? <button disabled={ColleagueInProgress.some(id => id === person.id)}
                                  className={style.buttonremove} onClick={(e) => {
                            e.preventDefault();
                            removeColleagueThunkCreator(person.id)
                        }}>выгнать</button>
                        : <button disabled={ColleagueInProgress.some(id => id === person.id)}
                                  className={style.buttonadd} onClick={(e) => {
                            e.preventDefault();
                            addColleagueThunkCreator(person);
                        }}>в коллеги</button>}
                </div>
            </div>
        </NavLink>
    )
}

export default Person;