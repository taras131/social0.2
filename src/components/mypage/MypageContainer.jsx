import React from "react";
import style from "./Mypage.module.css";
import Profile from "./profile/Profile";
import {connect} from "react-redux";
import {addPost, getProfile, input, setProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import AuthenticationRedirectHOC from "../../hoc/AuthenticationRedirectHOC";
import Message_item from "../dialogs/messages_items/message_item/Message_item";
import {compose} from "redux";

class MypageContainer extends React.Component {
    componentDidMount() {
        console.log(this.props);
        let personId = this.props.match.params.personId;
        this.props.getProfile(personId);
    }
    render() {
        return (
            <div className = {style.mypage}>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        postData: state.profileInformation.postData,
        inputValue: state.profileInformation.inputValue,
        profile: state.profileInformation.profile
    }
}

export default compose(
    connect(mapStateToProps, {addPost, input, setProfile, getProfile}),
    withRouter,
    AuthenticationRedirectHOC
)(MypageContainer);



