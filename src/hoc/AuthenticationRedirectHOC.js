import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications
    }
}

const AuthenticationRedirectHOC = (Component) => {
    class RedirectComponent  extends React.Component {
        render(){
            if(!this.props.isAuthentications) return <Redirect to = {"/login"} />
            return <Component {...this.props} />
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent;
}

export default AuthenticationRedirectHOC;