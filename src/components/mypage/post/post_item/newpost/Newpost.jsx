import React from "react";
import style from "./Newpost.module.css";
import {addPostCreatioAction, inputCreatioAction} from "../../../../../redux/profileReducer";

const Newpost = (props) => {
    const addPost = () => {
        props.dispatch(addPostCreatioAction());
    };
    const input = (e) => {
        props.dispatch(inputCreatioAction(e.target.value));
    };
    return (
        <div className = {style.newpost}>
            <input onChange = {input} value = {props.profileInformation.inputValue} /> 
            <button onClick = {addPost}>Опубликовать</button>
        </div>
    );
}

export default Newpost;