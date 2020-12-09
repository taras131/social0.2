import {connect} from "react-redux";
import {
    setColleagueInProgress,
    setCurrentPage,
    getPersons,
    removeColleagueThunkCreator,
    addColleagueThunkCreator,
} from "../../../redux/personsReducers";
import React from "react";
import Persons from "./persons/Persons";
import Preloader from "../../common/preloader/preloader";
import {compose} from "redux";
import {
    getAllUsersCount, getColleagueInProgress, getCurrentPage,
    getPageSize, getIsLoading, getAllPersons, getPortionPage
} from "../../../redux/personsSelectors";
import ErrorMessage from "../../common/errormessage/ErrorMessage";

class PersonsItemsContainer extends React.Component {

    componentDidMount() {
        this.props.getPersons(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getPersons(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isError ? <ErrorMessage text={"Ошибка загрузки пользователей. " +
            "Пожалуста попоробуйте позже."}/> : null}
            {this.props.isLoading ? <Preloader/> : null}
            <Persons {...this.props} onPageChanged={this.onPageChanged}/>
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
        isError: state.errorInformation.isError
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, setColleagueInProgress, getPersons,
        removeColleagueThunkCreator, addColleagueThunkCreator,
    }),
    //AuthenticationRedirectHOC
)(PersonsItemsContainer)

