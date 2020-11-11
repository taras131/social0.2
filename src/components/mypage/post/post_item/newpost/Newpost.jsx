import React from "react";
import style from "./Newpost.module.css";
import {addPostCreatioAction, inputCreatioAction} from "../../../../../redux/profileReducer";

const Newpost = (props) => {
    const addPost = () => {
        props.addPost();
    };
    const input = (e) => {
        props.input(e.target.value);
    };
    return (
        <div className = {style.newpost}>
            <input onChange = {input} value = {props.inputValue} />
            <button onClick = {addPost}>Опубликовать</button>
        </div>
    );
}

export default Newpost;