import React from "react";
import style from "./Newmessage.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../utils/validations/validations";
import {TEXTAREAINPUT} from "../../../common/formcontrol/FormControl";

let maxLength40 = maxLength(40);
const TextArea = TEXTAREAINPUT("textarea");
const NewmessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} className = {style.newmessage}>
            <Field component ={TextArea} name ="newMessage" placeholder={"введите сообщение"}
                   validate = {[requiredField, maxLength40]}/>
            <button>Отправить</button>
        </form>
    );
}

export default reduxForm({form: "addNewMessage"})(NewmessageForm);