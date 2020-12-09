import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React from "react";
import Preloader from "../../common/preloader/preloader";
import ErrorMessage from "../../common/errormessage/ErrorMessage";

const Profile = (props) => {
    if (props.isError) {
        return <ErrorMessage text={"Ошибка загрузки профиля. Повторите попытку позднее."}/>
    }
    if (!props.profile || props.isProfileLoading) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileDiscription profile={props.profile} status={props.status}
                                updateMyStatus={props.updateMyStatus}
                                isOwner={props.isOwner}
                                setProfilePhoto={props.setProfilePhoto}
                                updateProfile={props.updateProfile}
                                isEditMode={props.isEditMode}
                                setProfileEditMode={props.setProfileEditMode}
                                isError={props.isError}/>
            <Posts postData={props.postData} addPost={props.addPost}
                   profile={props.profile}/>
        </div>
    )
}

export default Profile;