import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";
import Preloader from "../../common/preloader/preloader";

const Profile = (props) => {
    if (!props.profile || props.isProfileLoading) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileDiscription profile={props.profile} status={props.status}
                                updateMyStatus={props.updateMyStatus}
                                isOwner={props.isOwner}
                                setProfilePhoto={props.setProfilePhoto}
                                updateProfile={props.updateProfile}/>
            <Posts postData={props.postData} addPost={props.addPost}
                   profile={props.profile}/>
        </div>
    )
}

export default Profile;