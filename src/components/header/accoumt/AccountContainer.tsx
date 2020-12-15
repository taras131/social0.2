import Account from "./Account";
import React from "react";
import {connect} from "react-redux";
import {loginOut} from "../../../redux/authenticationsReducer";
import {AppStateType} from "../../../redux/reduxStore";

type PropsType = {
    login: string
    isAuthentications: boolean
    loginOut: () => void
}
class AccountContainer extends React.Component<PropsType> {
    render() {
        return (
            <Account {...this.props} />
        )
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications,
        login: state.authenticationsInformation.authenticationsData.login
    }
}

export default connect(mapStateToProps, {loginOut})(AccountContainer);