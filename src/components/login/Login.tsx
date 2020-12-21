import LoginForm from "./loginform/LoginForm";
import {connect} from "react-redux";
import {login, loginOut} from "../../redux/authenticationsReducer";
import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import style from "./loginform/Login.module.css";
import {AppStateType} from "../../redux/reduxStore";
import {LoginFormDataType} from "../../types/Types";

const Login: FC<mapStateToPropsType & mapDispatchToPropsType> = ({login, isAuthentications, captchaURL}) => {
    const onSubmit = (formData: LoginFormDataType)=> {
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
type mapStateToPropsType = {
    isAuthentications: boolean
    captchaURL: string | null
}
type mapDispatchToPropsType = {
    login: (formData: any) => void
    loginOut: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications,
        captchaURL: state.authenticationsInformation.captchaURL
    }
}

export default connect(mapStateToProps, {login, loginOut})(Login);