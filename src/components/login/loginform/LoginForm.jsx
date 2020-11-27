import {Field, reduxForm} from "redux-form";
import React from "react";
import {NavLink} from "react-router-dom";
import {TEXTAREAINPUT} from "../../common/formcontrol/FormControl";
import {maxLength, requiredField} from "../../../utils/validations/validations";

const maxLength30 = maxLength(30);
const Input = TEXTAREAINPUT("input");
const LoginForm = (props) => {
    console.log(props);
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
                    <div>
                        <button>Войти</button>
                    </div>
                </form>}

        </div>
    )
}

export default reduxForm({form: "login"})(LoginForm);