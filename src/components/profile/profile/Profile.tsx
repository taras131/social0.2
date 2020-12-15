import ProfileDiscription from "./profilediscription/ProfileDiscription";
import Posts from "./posts/Posts";
import React, {FC} from "react";
import Preloader from "../../common/preloader/preloader";
import ErrorMessage from "../../common/errormessage/ErrorMessage";
import {PostDataType, ProfileType} from "../../../types/Types";

type PropsType = {
    setProfilePhoto: (file: any) => void
    status: string
    isOwner: boolean
    isEditMode: boolean
    isError: boolean
    isProfileLoading: boolean
    profile: ProfileType
    contacts: Array<string>
    postData: Array<PostDataType>
    updateProfile: (formData: ProfileType) => void
    updateMyStatus: (status: string) => void
    setProfileEditMode: (isEditMode: boolean) => void
    addPost: (text: string) => void
}
const Profile: FC<PropsType> = ({
                                    setProfilePhoto, status, profile, isOwner,
                                    updateMyStatus, isEditMode, setProfileEditMode,
                                    updateProfile, isError,isProfileLoading,postData,
                                    addPost
                                }) => {
    if (isError) {
        return <ErrorMessage text={"Ошибка загрузки профиля. Повторите попытку позднее."}/>
    }
    if (!profile || isProfileLoading) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileDiscription profile={profile} status={status}
                                updateMyStatus={updateMyStatus}
                                isOwner={isOwner}
                                setProfilePhoto={setProfilePhoto}
                                updateProfile={updateProfile}
                                isEditMode={isEditMode}
                                setProfileEditMode={setProfileEditMode}
                                isError={isError}/>
            <Posts postData={postData} addPost={addPost}
                   profile={profile}/>
        </div>
    )
}

export default Profile;