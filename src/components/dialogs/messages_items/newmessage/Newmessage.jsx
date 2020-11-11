import React from "react";
import style from "./Newmessage.module.css";

const Newmessage = (props) =>{
    const sendNewMessage = () => {
        props.sendNewMessage();
    }
    const input = (e) => {
        props.input(e.target.value);
    }
    return (
        <div className = {style.newmessage}>
            <input onChange = {input} value = {props.inputValue} />
            <button onClick= {sendNewMessage} >Отправить</button>
        </div>
    );
}

export default Newmessage;