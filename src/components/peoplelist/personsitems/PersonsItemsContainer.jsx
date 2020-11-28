import {connect} from "react-redux";
import {
    setColleagueInProgress,
    setCurrentPage, getPersons, removeColleagueThunkCreator, addColleagueThunkCreator
} from "../../../redux/personsReducers";
import React from "react";
import Persons from "./person/Persons";
import Preloader from "../../common/preloader/preloader";
import {compose} from "redux";
import {
    getAllUsersCount, getColleagueInProgress, getCurrentPage,
    getPageSize, getIsLoading, getAllPersons
} from "../../../redux/personsSelectors";



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
                        personsData = {this.props.personsData}
                        ColleagueInProgress ={this.props.ColleagueInProgress}
                        setColleagueInProgress = {this.props.setColleagueInProgress}
                        removeColleagueThunkCreator = {this.props.removeColleagueThunkCreator}
                        addColleagueThunkCreator = {this.props.addColleagueThunkCreator} />
            </>
    }
}
const mapStateToProps = (state) => {
    return {
        personsData: getAllPersons(state),
        pageSize: getPageSize(state),
        allUsersCount: getAllUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        ColleagueInProgress: getColleagueInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,{setCurrentPage, setColleagueInProgress, getPersons,
        removeColleagueThunkCreator, addColleagueThunkCreator}),
    //AuthenticationRedirectHOC
)(PersonsItemsContainer)

