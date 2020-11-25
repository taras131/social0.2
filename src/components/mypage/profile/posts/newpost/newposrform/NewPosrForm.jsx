import React from "react";
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
    return(<div>
                <form onSubmit={props.handleSubmit}>
                    <Field component = {"input"} placeholder={"введите ваш пост"} name= {"inputPost"} />
                    <button>Опубликовать</button>
                </form>
           </div>
    )
}

export default reduxForm({form: "addPost"})(NewPostForm);