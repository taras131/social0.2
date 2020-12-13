import {connect} from "react-redux";
import {
    setColleagueInProgress,
    setCurrentPage,
    getPersons,
    removeColleagueThunkCreator,
    addColleagueThunkCreator,
} from "../../redux/personsReducers";
import React from "react";
import Persons from "./personsitems/persons/Persons";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getAllUsersCount, getColleagueInProgress, getCurrentPage,
    getPageSize, getIsLoading, getAllPersons, getPortionPage
} from "../../redux/personsSelectors";
import ErrorMessage from "../common/errormessage/ErrorMessage";
import {AppStateType} from "../../redux/reduxStore";
import {PersonsType} from "../../types/Types";

type PropsType = {
    personsData: Array<PersonsType>
    ColleagueInProgress: Array<number>
    allUsersCount: number
    pageSize: number
    currentPage: number
    portionPage: number
    isLoading: boolean
    isError: boolean
    onPageChanged: (currentPage: number) => void
    addColleagueThunkCreator: (person : PersonsType) => void
    removeColleagueThunkCreator: (id: number) => void
    getPersons: (currentPage: number, pageSize: number) => void
}

class PersonsItemsContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getPersons(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage: number) => {
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

const mapStateToProps = (state: AppStateType) => {
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
    })
)(PersonsItemsContainer)

