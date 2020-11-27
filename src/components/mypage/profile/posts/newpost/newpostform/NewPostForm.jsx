import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../../../utils/validations/validations";
import {TEXTAREAINPUT} from "../../../../../common/formcontrol/FormControl";

let maxLength30 = maxLength(30);
const TextArea = TEXTAREAINPUT("textarea");
const NewPostForm = (props) => {
    return(<div>
                <form onSubmit={props.handleSubmit}>
                    <Field component = {TextArea} placeholder={"введите ваш пост"} name= {"inputPost"}
                    validate = {[requiredField, maxLength30]}/>
                    <button>Опубликовать</button>
                </form>
           </div>
    )
}

export default reduxForm({form: "addPost"})(NewPostForm);