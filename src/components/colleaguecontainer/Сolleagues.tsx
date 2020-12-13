import React, {FC} from "react";
import СolleagueItem from "./colleague/СolleagueItem";
import style from "./colleague/СolleagueItem.module.css"
import {PersonsType} from "../../types/Types";
type ProopsType ={
    colleagueData: Array<PersonsType>
    removeColleagueThunkCreator: (id: number) => void
}
const Сolleagues: FC <ProopsType> = ({colleagueData,removeColleagueThunkCreator}) => {
    let colleagues = colleagueData.map(item => <СolleagueItem person={item}
                                                        removeColleagueThunkCreator={removeColleagueThunkCreator} />)
    return (
        <div className={style.colleagueswrapper}>
            {colleagues}
        </div>
    )
}
export default Сolleagues