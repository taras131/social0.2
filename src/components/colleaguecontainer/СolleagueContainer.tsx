import {connect} from "react-redux";
import React, {FC} from "react";
import {removeColleagueThunkCreator} from "../../redux/personsReducers";
import Сolleagues from "./Сolleagues";
import {PersonsType} from "../../types/Types";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    colleagueData: Array<PersonsType>
    removeColleagueThunkCreator: (id:number) => void
}
const СolleagueContainer: FC <PropsType> =(props)=>{
    return(
        <div>
            <Сolleagues {...props}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        colleagueData: state.colleagueInformation.colleagueData
    }
}
export default connect(mapStateToProps, {removeColleagueThunkCreator})(СolleagueContainer)