import style from "../ProfileDiscription.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {TEXTAREAINPUT} from "../../../../common/formcontrol/FormControl";
import {requiredField} from "../../../../../utils/validations/validations";


const ProfileMode = (props) => {
    const Input = TEXTAREAINPUT("input");
    console.log(props.error);
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div className={style.item}> Полное имя:
                <Field placeholder={props.profile.fullName} component={Input} name={"fullName"}
                       validate={[requiredField]}/>
            </div>

            <div className={style.item}> Обо мне:
                <Field placeholder={props.profile.aboutMe} component={Input} name={"aboutMe"}
                       validate={[requiredField]}/>
            </div>
            <div className={style.item}> Ищу работу:
                <Field component={Input} type={"checkbox"} name={"lookingForAJob"}
                       validate={[]}/>
            </div>
            <div className={style.item}> Что ищу:
                <Field placeholder={props.profile.lookingForAJobDescription} component={Input}
                       name={"lookingForAJobDescription"} validate={[requiredField]}/>
            </div>
            <div>
                <div className={style.contactsitem}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <b>{key}: {<Field placeholder={key} component={Input} name={"contacts." + key}
                                              validate={[]}/>} </b>)
                    })}
                </div>
            </div>
            {props.error && <div className={style.error}>
                {props.error}
            </div>
            }
            <div>
                <button>сохранить</button>
            </div>
        </form>)

}
const ProfileModeForm = reduxForm({form: "profile"})(ProfileMode);
export default ProfileModeForm;