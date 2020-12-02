import {connect} from "react-redux";
import {
    setColleagueInProgress,
    setCurrentPage,
    getPersons,
    removeColleagueThunkCreator,
    addColleagueThunkCreator,
    setPages
} from "../../../redux/personsReducers";
import React from "react";
import Persons from "./persons/Persons";
import Preloader from "../../common/preloader/preloader";
import {compose} from "redux";
import {
    getAllUsersCount, getColleagueInProgress, getCurrentPage,
    getPageSize, getIsLoading, getAllPersons, getPortionPage, getMultiplierPage
} from "../../../redux/personsSelectors";


class PersonsItemsContainer extends React.Component {
    componentDidMount() {
        this.props.getPersons(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getPersons(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Persons {...this.props} onPageChanged = {this.onPageChanged} />
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
        ColleagueInProgress: getColleagueInProgress(state),
        portionPage: getPortionPage(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, setColleagueInProgress, getPersons,
        removeColleagueThunkCreator, addColleagueThunkCreator,}),
    //AuthenticationRedirectHOC
)(PersonsItemsContainer)

