import style from "./ProfileDiscription.module.css";
import Preloader from "../../../common/preloader/preloader";
import MyStatusWithHooks from "./mystatus/MyStatusWithHooks";

const ProfileDiscription = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
    <div>
        <MyStatusWithHooks status = {props.status} updateMyStatus = {props.updateMyStatus}/>
        <div className = {style.ava}>
            <img src ={props.profile.photos.large ? props.profile.photos.large
                :"https://laowai.ru/wp-content/uploads/2015/11/pic2-nipic18.jpg"}/>
            <div className ={style.discription}>
                <div className ={style.item}>Имя: {props.profile.fullName}</div>
                <div className ={style.item}> Обо мне: {props.profile.aboutMe}</div>
                <div className ={style.item}> Ищу работу: {props.profile.lookingForAJob? " Да" : " Нет" }</div>
                <div className ={style.item}> Что ищу: {props.profile.lookingForAJobDescription}</div>
                <div className ={style.item}>Контакты </div>
                <div className ={style.item}>Facebook: {props.profile.contacts.facebook}</div>
                <div className ={style.item}>ВКонтакте: {props.profile.contacts.vk}</div>
            </div>
        </div>
    </div>
    )
}

export default ProfileDiscription;