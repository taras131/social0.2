import React from "react";
import style from "./ProfileDiscription.module.css";
import MyStatusWithHooks from "./mystatus/MyStatusWithHooks";
import Contacts from "./contacts/Contacts";
import ProfileMode from "./profilemode/ProfileMode";
import ErrorMessage from "../../../common/errormessage/ErrorMessage";
import anonimavatar from "../../../../img/anonimavatar.jpg";

const ProfileDiscription = (props) => {
    const myPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            props.setProfilePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.updateProfile(formData)
    }
    if(props.isError){
        return <ErrorMessage text = {"Ошибка , попробуйте повторить попытку позже."}/>
    }
    return (
        <div className={style.profilewrapper}>
            <MyStatusWithHooks status={props.status} updateMyStatus={props.updateMyStatus}
                               isOwner={props.isOwner} profile={props.profile}/>
            <div className={style.ava}>
                <img src={props.profile.photos.large ? props.profile.photos.large
                    : anonimavatar}/>
                {props.isEditMode
                    ? <div>
                        <ProfileMode profile={props.profile}
                                     onSubmit={onSubmit} initialValues ={props.profile} />
                    </div>
                    : <div className={style.discription}>
                        <div className={style.item}>Имя:
                            <div className={style.findings}>{props.profile.fullName}</div>
                        </div>
                        <div className={style.item}> Обо мне:
                            <div className={style.findings}>{props.profile.aboutMe}</div>
                        </div>
                        <div className={style.item}> Ищу работу:
                            <div className={style.findings}>{props.profile.lookingForAJob ? " Да" : " Нет"}</div>
                        </div>
                        <div className={style.item}> Что ищу:
                            <div className={style.findings}>{props.profile.lookingForAJobDescription}</div>
                        </div>
                        <div className={style.contactswrapper}>
                            <div>Контакты:</div>
                            <Contacts contacts={props.profile.contacts}/>
                        </div>
                        {props.isOwner && <input className={style.input} type={"file"} onChange={myPhotoSelected}/>}
                        {props.isOwner && <button onClick={() => {
                            props.setProfileEditMode(true)
                        }}> Рeдактировать профиль </button>}
                    </div>}

            </div>

        </div>
    )
}

export default ProfileDiscription;