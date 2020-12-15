import {Field, reduxForm} from "redux-form";
import React, {FC} from "react";
import {TEXTAREAINPUT} from "../../common/formcontrol/FormControl";
import {maxLength, requiredField} from "../../../utils/validations/validations";
import style from "./Login.module.css";

const maxLength30 = maxLength(30);
const Input = TEXTAREAINPUT("input");
type PropsType = {
    isAuthentications: boolean
    captchaURL: string
    error: string
    handleSubmit: any
    loginOut: () => void
}
const LoginForm: FC<PropsType> = ({loginOut, handleSubmit, error, captchaURL,isAuthentications}) => {
    const out = () => {
        loginOut();
    }
    return(
        <div>
            {isAuthentications
                ?   <button onClick={out}>Выйти</button>
                :<form onSubmit={handleSubmit}>
                    <div className={style.autchitem}>
                        <Field placeholder={"Логин"} component = {Input} name={"login"}
                               validate = {[requiredField, maxLength30]}/>
                    </div>
                    <div className={style.autchitem}>
                        <Field placeholder={"Пароль"} component = {Input} name={"password"}
                               validate = {[requiredField, maxLength30]}/>
                    </div>
                    <div className={style.autchitem}>
                        <Field type={"checkbox"} component = {"input"} name={"rememberMe"}/> Запомни меня
                    </div>
                    <div className={style.error}>
                        {error}
                    </div>
                    {captchaURL &&
                    <div>
                        <img src={captchaURL} alt="props.captchaURL"/>
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