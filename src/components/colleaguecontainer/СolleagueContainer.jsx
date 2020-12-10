import {connect} from "react-redux";
import React from "react";
import {removeColleagueThunkCreator} from "../../redux/personsReducers";
import Сolleagues from "./Сolleagues";

const СolleagueContainer =(props)=>{
    return(
        <div>
            <Сolleagues {...props}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        colleagueData: state.colleagueInformation.colleagueData
    }
}
export default connect(mapStateToProps, {removeColleagueThunkCreator})(СolleagueContainer)