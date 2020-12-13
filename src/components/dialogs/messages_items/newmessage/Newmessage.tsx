import React, {FC} from "react";
import style from "./Newmessage.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../utils/validations/validations";
import {TEXTAREAINPUT} from "../../../common/formcontrol/FormControl";
type PropsType = {
    handleSubmit: any
}
let maxLength40 = maxLength(40);
const TextArea = TEXTAREAINPUT("textarea");

const NewmessageForm: FC <PropsType> = ({handleSubmit}) =>{
    return (
        <form onSubmit={handleSubmit} className = {style.newmessage}>
            <Field component ={TextArea} name ="newMessage" placeholder={"введите сообщение"}
                   validate = {[requiredField, maxLength40]}/>
            <button>Отправить</button>
        </form>
    );
}

export default reduxForm({form: "addNewMessage"})(NewmessageForm);