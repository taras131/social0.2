import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    return (
        <div>
            <ProfileDiscription profile = {props.profile} status = {props.status}
                                updateMyStatus = {props.updateMyStatus} />
            <Posts postData={props.postData} addPost={props.addPost} />
        </div>
    )
}

export default Profile;