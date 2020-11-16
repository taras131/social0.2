import Account from "./Account";
import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {setPerson} from "../../../redux/authenticationsReduser";


class AccountContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true}).then(response => {
                if (response.data.resultCode ===0){
                    this.props.setPerson(response.data.data.id, response.data.data.email, response.data.data.login)
                }
        });
    }
    render() {
        return (
            <Account {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications,
        login: state.authenticationsInformation.login
    }
}


export default connect(mapStateToProps, {setPerson})(AccountContainer);