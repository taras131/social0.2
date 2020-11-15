import {connect} from "react-redux";
import {
    addColleagueActionCreater,
    removeColleagueActionCreater, setAllUsersCountActionCreater, setCurrentPageActionCreater, setIsLoadingActionCreater,
    setPersonDataActionCreater
} from "../../../redux/personsReducers";
import React from "react";
import * as axios from "axios";
import Persons from "./person/Persons";
import preloader from "../../../img/preloader.svg";
import style from "../PeopleList.module.css";


class PersonsItemsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setPerson(response.data.items);
                this.props.setAllUsersCount(response.data.totalCount);
            });
    }
    onPageChanged = (currentPage) =>{
        this.props.setIsLoading(true);
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setPerson(response.data.items)
            });
    }

    render() {
        return <>
            {this.props.isLoading ? <img src = {preloader} className = {style.preloader} /> : null}
            <Persons allUsersCount ={this.props.allUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}
                        personData = {this.props.personData}
                        addColleagu = {this.props.addColleagu}
                        removeColleague = {this.props.removeColleague} />
            </>
    }
}
const mapStateToProps = (state) => {
    return {
        personData: state.personInformation.personData,
        pageSize: state.personInformation.pageSize,
        allUsersCount: state.personInformation.allUsersCount,
        currentPage: state.personInformation.currentPage,
        isLoading: state.personInformation.isLoading
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addColleagu: (id) => {
            dispatch(addColleagueActionCreater(id));
        },
        removeColleague: (id) => {
            dispatch(removeColleagueActionCreater(id));
        },
        setPerson: (users) => {
            dispatch(setPersonDataActionCreater(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreater(currentPage));
        },
        setAllUsersCount: (allUsersCount) => {
            dispatch(setAllUsersCountActionCreater(allUsersCount));
        },
        setIsLoading: (isLoading) => {
            dispatch(setIsLoadingActionCreater(isLoading));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonsItemsContainer);

