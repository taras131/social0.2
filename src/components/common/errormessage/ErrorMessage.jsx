
import {connect} from "react-redux";
import React from "react";
import {removeError} from "../../../redux/errorReducer";
import style from "./errorMessage.module.css"

const ErrorMessage = (props) => {
    const onButtonClick = () => {
        props.removeError();
    }
    return <div className={style.errormessagewrapper}>
        <p>{props.text}</p>
        <button onClick={onButtonClick}>ok</button>
    </div>
}

export default connect(null, {removeError})(ErrorMessage)