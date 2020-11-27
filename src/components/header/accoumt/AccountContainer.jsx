import Account from "./Account";
import React from "react";
import {connect} from "react-redux";
import {getAuthMe} from "../../../redux/authenticationsReduser";

class AccountContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthMe();
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
        login: state.authenticationsInformation.authenticationsData.login
    }
}

export default connect(mapStateToProps, {getAuthMe})(AccountContainer);