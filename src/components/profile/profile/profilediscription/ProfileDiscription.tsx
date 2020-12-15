import React, {FC} from "react";
import style from "./ProfileDiscription.module.css";
import MyStatusWithHooks from "./mystatus/MyStatusWithHooks";
import Contacts from "./contacts/Contacts";
import ProfileMode from "./profilemode/ProfileMode";
import ErrorMessage from "../../../common/errormessage/ErrorMessage";
import anonimavatar from "../../../../img/anonimavatar.jpg";
import {ProfileType} from "../../../../types/Types";

type PropsType = {
    setProfilePhoto: (file: any) => void
    status: string
    isOwner: boolean
    isEditMode: boolean
    isError: boolean
    profile: ProfileType
    updateProfile: (formData: ProfileType) => void
    updateMyStatus: (status: string) => void
    setProfileEditMode: (isEditMode: boolean) => void
    contacts: Array<string>
}
const ProfileDiscription: FC<PropsType> = ({
                                               setProfilePhoto, status, profile, isOwner,
                                               updateMyStatus, isEditMode, setProfileEditMode,
                                               updateProfile, isError
                                           }) => {
    const myPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            setProfilePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData: any) => {
        updateProfile(formData)
    }
    if (isError) {
        return <ErrorMessage text={"Ошибка , попробуйте повторить попытку позже."}/>
    }
    return (
        <div className={style.profilewrapper}>
            <MyStatusWithHooks status={status} updateMyStatus={updateMyStatus}
                               isOwner={isOwner} profile={profile}/>
            <div className={style.ava}>
                <img src={profile.photos.large ? profile.photos.large
                    : anonimavatar}/>
                {isEditMode
                    ? <div>
                        <ProfileMode profile={profile}
                                     onSubmit={onSubmit} initialValues={profile}/>
                    </div>
                    : <div className={style.discription}>
                        <div className={style.item}>Имя:
                            <div className={style.findings}>{profile.fullName}</div>
                        </div>
                        <div className={style.item}> Обо мне:
                            <div className={style.findings}>{profile.aboutMe}</div>
                        </div>
                        <div className={style.item}> Ищу работу:
                            <div className={style.findings}>{profile.lookingForAJob ? " Да" : " Нет"}</div>
                        </div>
                        <div className={style.item}> Что ищу:
                            <div className={style.findings}>{profile.lookingForAJobDescription}</div>
                        </div>
                        <div className={style.contactswrapper}>
                            <div>Контакты:</div>
                            <Contacts contacts={profile.contacts}/>
                        </div>
                        {isOwner && <input className={style.input} type={"file"} onChange={myPhotoSelected}/>}
                        {isOwner && <button onClick={() => {
                            setProfileEditMode(true)
                        }}> Рeдактировать профиль </button>}
                    </div>}

            </div>

        </div>
    )
}

export default ProfileDiscription;