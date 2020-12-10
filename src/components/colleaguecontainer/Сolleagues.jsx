import React from "react";
import СolleagueItem from "./colleague/СolleagueItem";
import style from "./colleague/СolleagueItem.module.css"

const Сolleagues = (props) => {
    let colleagues = props.colleagueData.map(item => <СolleagueItem person={item}
                                                        removeColleagueThunkCreator={props.removeColleagueThunkCreator}
                                                        key={item.id}/>)
    return (
        <div className={style.colleagueswrapper}>
            {colleagues}
        </div>
    )
}
export default Сolleagues