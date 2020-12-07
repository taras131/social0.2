import {Field, reduxForm} from "redux-form";
import React from "react";
import {TEXTAREAINPUT} from "../../common/formcontrol/FormControl";
import {maxLength, requiredField} from "../../../utils/validations/validations";
import style from "./Login.module.css";
const maxLength30 = maxLength(30);
const Input = TEXTAREAINPUT("input");
const LoginForm = (props) => {
    const loginOut = () => {
        props.loginOut();
    }
    return(
        <div>
            {props.isAuthentications
                ?   <button onClick={loginOut}>Выйти</button>
                :<form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={"Логин"} component = {Input} name={"login"}
                               validate = {[requiredField, maxLength30]}/>
                    </div>
                    <div>
                        <Field placeholder={"Пароль"} component = {Input} name={"password"}
                               validate = {[requiredField, maxLength30]}/>
                    </div>
                    <div>
                        <Field type={"checkbox"} component = {"input"} name={"rememberMe"}/> Запомни меня
                    </div>
                    <div className={style.error}>
                        {props.error}
                    </div>
                    {props.captchaURL &&
                    <div>
                        <img src={props.captchaURL} alt="props.captchaURL"/>
                        <Field placeholder={"Введите символы"} component = {Input} name={"captcha"}
                               validate = {[requiredField]}/>
                    </div>}
                    <div>
                        <button>Войти</button>
                    </div>
                </form>}

        </div>
    )
}

export default reduxForm({form: "login"})(LoginForm);