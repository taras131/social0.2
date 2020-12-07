import React from "react";
import style from "./Mypage.module.css";
import Profile from "./profile/Profile";
import {connect} from "react-redux";
import {
    addPost,
    getMyStatus,
    getProfile,
    input,
    setProfile, setProfileEditMode,
    setProfilePhoto,
    updateMyStatus, updateProfile
} from "../../redux/profileReducer";
import AuthenticationRedirectHOC from "../../hoc/AuthenticationRedirectHOC";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class MypageContainer extends React.Component {
    updateProfile() {
        let id = this.props.match.params.personId;
        if (!id) {
            id = this.props.myId;
            if (!id) {
                this.props.history.push("./login");
            }
        }
        this.props.getProfile(id);
        this.props.getMyStatus(id);
    }
    componentDidMount() {
        this.updateProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.personId !== prevProps.match.params.personId) {
            this.updateProfile();
        }
    }
    render() {
        return (
            <div className={style.mypage}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateMyStatus={this.props.updateMyStatus} isOwner={!this.props.match.params.personId}
                         isProfileLoading={this.props.isProfileLoading} updateProfile={this.props.updateProfile}
                         isEditMode={this.props.isEditMode} setProfileEditMode={this.props.setProfileEditMode}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        postData: state.profileInformation.postData,
        profile: state.profileInformation.profile,
        status: state.profileInformation.status,
        myId: state.authenticationsInformation.authenticationsData.personId,
        isProfileLoading: state.profileInformation.isProfileLoading,
        isEditMode: state.profileInformation.isEditMode
    }
}
export default compose(
    connect(mapStateToProps, {
        addPost, setProfile, getProfile, getMyStatus, updateMyStatus, setProfilePhoto,
        updateProfile, setProfileEditMode
    }),
    withRouter,
    AuthenticationRedirectHOC
)(MypageContainer);



