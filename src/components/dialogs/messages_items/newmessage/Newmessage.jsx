import React from "react";
import style from "./Newmessage.module.css";

const Newmessage = (props) =>{

    const newMessageElement = React.createRef();

    const postNewMessage = () => {
        props.dispatch({type: "ADDMESSAGE" });
    }

    const input = () => {
        props.dispatch({type: "MESSAGEINPUT", messageimput: newMessageElement.current.value })
    }

    return (
        <div className = {style.newmessage}>
            <input onChange = {input} ref = {newMessageElement} value = {props.inputValue}  /> 
            <button onClick= {postNewMessage} >Отправить</button>
        </div>
    );
}

export default Newmessage;