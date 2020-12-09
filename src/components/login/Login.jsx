import LoginForm from "./loginform/LoginForm";
import {connect} from "react-redux";
import {login, loginOut} from "../../redux/authenticationsReducer";
import React from "react";
import {Redirect} from "react-router-dom";
import style from"./loginform/Login.module.css";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }
    if(props.isAuthentications){
        return <Redirect to ="/profile/" />
    }
    return(
        <div className={style.loginwrapper}>
            <h1>Ввведите логин и пароль</h1>
            <LoginForm onSubmit={onSubmit} isAuthentications = {props.isAuthentications}
                       loginOut ={props.loginOut}  captchaURL = {props. captchaURL} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications,
        captchaURL: state.authenticationsInformation. captchaURL
    }
}

export default connect(mapStateToProps, {login, loginOut})(Login);