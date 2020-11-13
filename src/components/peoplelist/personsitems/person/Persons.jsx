import React from "react";
import style from "./Person.module.css";
import * as axios from "axios";

let i = 0;

class Persons extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setPerson(response.data.items);
            });
    }

    render() {
        return(
            <div className={style.personitems}>
                {
                    this.props.personData.map(item => <div className={style.person}>
                        <div>
                            <div className={style.personinformation}>
                                <div>
                                    <img src = {item.photos.small != null
                                        ? item.photos.small : "https://yt3.ggpht.com/a/AATXAJx8MagglWeof2zL5R6Shk3KU8mmthN1Pl5Of0ih=s900-c-k-c0xffffffff-no-rj-mo" }/>
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
                                ? <button className={style.buttonremove} onClick={() => {
                                    this.props.removeColleague(item.id)
                                }}>выгнать</button>
                                : <button className={style.buttonadd} onClick={() => {
                                    this.props.addColleagu(item.id)
                                }}>в коллеги</button>}
                        </div>

                    </div>)
                }
            </div>
        )
    }
}

export default Persons;