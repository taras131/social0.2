import React from "react";
import style from "./Mypage.module.css";
import * as axios from "axios";
import Profile from "./profile/Profile";
import {connect} from "react-redux";
import {addPost, input, setProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";


class MypageContainer extends React.Component {
    componentDidMount() {
        let personId = this.props.match.params.personId;
        if(!personId) personId = 12594
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${personId}`)
            .then(response => {
                this.props.setProfile(response.data);
            });
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
let withUrlDataContainerComponent = withRouter(MypageContainer);
export default connect(mapStateToProps,{addPost,input,setProfile})(withUrlDataContainerComponent);