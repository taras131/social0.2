import style from "./Person.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Persons = (props) => {
        let pagesCount = Math.ceil(props.allUsersCount/props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
                <div>
                    {pages.map(item => {
                        return <span className={props.currentPage === item
                            ? style.dedicatedcount : style.count} onClick={() =>{props.onPageChanged(item)}}>{item}</span>
                    })}
                </div>
                <div className={style.personitems}>
                    {
                        props.personData.map(item => <div className={style.person}>
                            <div>
                                <div className={style.personinformation}>
                                    <div>
                                            <NavLink to ={"/profile/" + item.id}>
                                                    <img src = {item.photos.small != null ? item.photos.small
                                                        : "https://yt3.ggpht.com/a/AATXAJx8MagglWeof2zL5R6Shk3KU8mmthN1Pl5Of0ih=s900-c-k-c0xffffffff-no-rj-mo" }/>
                                            </NavLink>
                                    </div>
                                    <div className={style.data}>
                                        <div></div>
                                        <div>Фамилия: {item.name}</div>
                                        <div>Страна: Россия </div>
                                        <div>Город: Балашиха</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.button}>
                                {item.followed
                                    ? <button disabled = {props.ColleagueInProgress.some(id => id === item.id)}
                                              className={style.buttonremove} onClick={() => {
                                            props.removeColleagueThunkCreator(item.id)
                                    }}>выгнать</button>
                                    : <button disabled = {props.ColleagueInProgress.some(id => id === item.id)}
                                            className = {style.buttonadd} onClick={() => {
                                            props.addColleagueThunkCreator(item.id);
                                    }}>в коллеги</button>}
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    {pages.map(item => {
                        return <span className={props.currentPage === item
                            ? style.dedicatedcount : style.count} onClick={() =>{props.onPageChanged(item)}}>{item}</span>
                    })}
                </div>
            </div>

}

export default Persons;