import {connect} from "react-redux";
import {addColleague, removeColleague, setAllUsersCount, setCurrentPage, setIsLoading, setPersonsData,
} from "../../../redux/personsReducers";
import React from "react";
import * as axios from "axios";
import Persons from "./person/Persons";
import Preloader from "../../common/preloader";


class PersonsItemsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setPersonsData(response.data.items);
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
                this.props.setPersonsData(response.data.items)
            });
    }

    render() {
        console.log(this.props.personData);
        return <>
            {this.props.isLoading ? <Preloader /> : null}
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
    console.log(state.personInformation);
    return {
        personData: state.personInformation.personData,
        pageSize: state.personInformation.pageSize,
        allUsersCount: state.personInformation.allUsersCount,
        currentPage: state.personInformation.currentPage,
        isLoading: state.personInformation.isLoading
    }
}

export default connect(mapStateToProps,{
    addColleague,
    removeColleague,
    setPersonsData,
    setCurrentPage,
    setAllUsersCount,
    setIsLoading
})(PersonsItemsContainer);

