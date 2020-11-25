import {Field, reduxForm} from "redux-form";
import React from "react";


const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Логин"} component = {"input"} name={"login"}/>
                </div>
                <div>
                    <Field placeholder={"Пароль"} component = {"input"} name={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} component = {"input"} name={"rememberMe"}/> Запомни меня
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: "login"})(LoginForm);