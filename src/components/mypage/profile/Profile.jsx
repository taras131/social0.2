import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileDiscription profile = {props.profile} status = {props.status}
                                updateMyStatus = {props.updateMyStatus}
                                isOwner ={props.isOwner}
                                setProfilePhoto = {props.setProfilePhoto} />
            <Posts postData={props.postData} addPost={props.addPost}
                   profile = {props.profile}/>
        </div>
    )
}

export default Profile;