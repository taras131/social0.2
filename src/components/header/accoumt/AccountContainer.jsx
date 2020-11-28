import Account from "./Account";
import React from "react";
import {connect} from "react-redux";
import {loginOut} from "../../../redux/authenticationsReducer";

class AccountContainer extends React.Component {
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

export default connect(mapStateToProps, {loginOut})(AccountContainer);