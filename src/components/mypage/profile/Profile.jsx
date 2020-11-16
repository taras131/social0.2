import style from "./profilediscription/ProfileDiscription.module.css"
import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";


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