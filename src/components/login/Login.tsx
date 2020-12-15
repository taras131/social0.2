import LoginForm from "./loginform/LoginForm";
import {connect} from "react-redux";
import {login, loginOut} from "../../redux/authenticationsReducer";
import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import style from "./loginform/Login.module.css";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    isAuthentications: boolean
    captchaURL: string
    login: (formData: any) => void
    loginOut: () => void
}

const Login: FC<PropsType> = ({login, isAuthentications, captchaURL}) => {
    const onSubmit = (formData: any) => {
        login(formData);
    }
    if (isAuthentications) {
        return <Redirect to="/profile/"/>
    }
    return (
        <div className={style.loginwrapper}>
            <h1>Ввведите логин и пароль</h1>
            <LoginForm onSubmit={onSubmit} isAuthentications={isAuthentications}
                       loginOut={loginOut} captchaURL={captchaURL}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications,
        captchaURL: state.authenticationsInformation.captchaURL
    }
}

export default connect(mapStateToProps, {login, loginOut})(Login);