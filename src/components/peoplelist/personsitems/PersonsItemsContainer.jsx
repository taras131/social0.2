import {connect} from "react-redux";
import {
    setColleagueInProgress,
    setCurrentPage, getPersons, removeColleagueThunkCreator, addColleagueThunkCreator
} from "../../../redux/personsReducers";
import React from "react";
import Persons from "./person/Persons";
import Preloader from "../../common/preloader";
import AuthenticationRedirectHOC from "../../../hoc/AuthenticationRedirectHOC";
import {compose} from "redux";


class PersonsItemsContainer extends React.Component {
    componentDidMount() {
        this.props.getPersons(this.props.currentPage , this.props.pageSize);
    }
    onPageChanged = (currentPage) =>{
        this.props.getPersons(currentPage, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Persons allUsersCount ={this.props.allUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}
                        personData = {this.props.personData}
                        ColleagueInProgress ={this.props.ColleagueInProgress}
                        setColleagueInProgress = {this.props.setColleagueInProgress}
                        removeColleagueThunkCreator = {this.props.removeColleagueThunkCreator}
                        addColleagueThunkCreator = {this.props.addColleagueThunkCreator} />
            </>
    }
}
const mapStateToProps = (state) => {
    return {
        personData: state.personInformation.personData,
        pageSize: state.personInformation.pageSize,
        allUsersCount: state.personInformation.allUsersCount,
        currentPage: state.personInformation.currentPage,
        isLoading: state.personInformation.isLoading,
        ColleagueInProgress: state.personInformation.ColleagueInProgress
    }
}

export default compose(
    connect(mapStateToProps,{setCurrentPage, setColleagueInProgress, getPersons,
        removeColleagueThunkCreator, addColleagueThunkCreator}),
    AuthenticationRedirectHOC
)(PersonsItemsContainer)

