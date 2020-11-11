import React from "react";
import {sendNewMessageCreatorAction, inputCreatorAction} from "../../../../redux/messagesReducer";
import style from "./Newmessage.module.css";

const Newmessage = (props) =>{
    const sendNewMessage = () => {
        props.dispatch(sendNewMessageCreatorAction());
    }
    const input = (e) => {
        props.dispatch(inputCreatorAction(e.target.value));
    }
    return (
        <div className = {style.newmessage}>
            <input onChange = {input} value = {props.inputValue}  /> 
            <button onClick= {sendNewMessage} >Отправить</button>
        </div>
    );
}

export default Newmessage;