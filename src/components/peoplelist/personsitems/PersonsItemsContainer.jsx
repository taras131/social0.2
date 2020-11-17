import {connect} from "react-redux";
import {
    addColleague,
    removeColleague,
    setAllUsersCount, setColleagueInProgress,
    setCurrentPage,
    setIsLoading,
    setPersonsData,ColleagueInProgress
} from "../../../redux/personsReducers";
import React from "react";
import Persons from "./person/Persons";
import Preloader from "../../common/preloader";
import {APIPersons} from "../../../api/api";

class PersonsItemsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        APIPersons.getPersons(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsLoading(false);
                this.props.setPersonsData(data.items);
                this.props.setAllUsersCount(data.totalCount);
            });
    }
    onPageChanged = (currentPage) =>{
        this.props.setIsLoading(true);
        this.props.setCurrentPage(currentPage)
        APIPersons.getPersons(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsLoading(false);
                this.props.setPersonsData(data.items)
            });
    }
    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Persons allUsersCount ={this.props.allUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}
                        personData = {this.props.personData}
                        addColleague = {this.props.addColleague}
                        removeColleague = {this.props.removeColleague}
                        ColleagueInProgress ={this.props.ColleagueInProgress}
                        setColleagueInProgress ={this.props.setColleagueInProgress}/>
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

export default connect(mapStateToProps,{
    addColleague,
    removeColleague,
    setPersonsData,
    setCurrentPage,
    setAllUsersCount,
    setIsLoading,
    setColleagueInProgress
})(PersonsItemsContainer);

