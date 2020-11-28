import React from "react";
import style from "./Mypage.module.css";
import Profile from "./profile/Profile";
import {connect} from "react-redux";
import {addPost, getMyStatus, getProfile, input, setProfile, updateMyStatus} from "../../redux/profileReducer";
import AuthenticationRedirectHOC from "../../hoc/AuthenticationRedirectHOC";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class MypageContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.personId;
        if(!id) {
            id = this.props.myId;
            if(!id){
                this.props.history.push("./login");
            }
        }

        this.props.getProfile(id);
        this.props.getMyStatus(id);
    }
    render() {
        return (
            <div className = {style.mypage}>
                <Profile {...this.props} profile = {this.props.profile} status = {this.props.status}
                         updateMyStatus = {this.props.updateMyStatus} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        postData: state.profileInformation.postData,
        profile: state.profileInformation.profile,
        status: state.profileInformation.status,
        myId: state.authenticationsInformation.authenticationsData.personId
    }
}

export default compose(
    connect(mapStateToProps, {addPost, setProfile, getProfile, getMyStatus, updateMyStatus}),
    withRouter,
    AuthenticationRedirectHOC
)(MypageContainer);



