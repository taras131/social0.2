import React from "react";
import СolleagueItem from "./colleague/СolleagueItem";

const Сolleagues = (props) => {
    let colleagues = props.colleagueData.map(item => <СolleagueItem person={item}
                                                        removeColleagueThunkCreator={props.removeColleagueThunkCreator}
                                                        key={item.id}/>)
    return (
        <div>
            {colleagues}
        </div>
    )
}
export default Сolleagues