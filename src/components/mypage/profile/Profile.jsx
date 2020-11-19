import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    return (
        <div>
            <ProfileDiscription profile={props.profile}/>
            <Posts postData={props.postData} addPost={props.addPost} inputValue={props.inputValue}
                   input={props.input}/>
        </div>
    )
}

export default Profile;