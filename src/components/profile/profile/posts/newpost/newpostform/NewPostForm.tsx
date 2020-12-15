import React, {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../../../utils/validations/validations";
import {TEXTAREAINPUT} from "../../../../../common/formcontrol/FormControl";

type PropsType = {
    handleSubmit: any
}
let maxLength30 = maxLength(30);
const TextArea = TEXTAREAINPUT("textarea");
const NewPostForm: FC<PropsType> = ({handleSubmit}) => {
    return(<div>
                <form onSubmit={handleSubmit}>
                    <Field component = {TextArea} placeholder={"введите ваш пост"} name= {"inputPost"}
                    validate = {[requiredField, maxLength30]}/>
                    <button>Отправить</button>
                </form>
           </div>
    )
}

export default reduxForm({form: "addPost"})(NewPostForm);