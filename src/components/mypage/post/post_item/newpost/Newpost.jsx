import React from "react";
import style from "./Newpost.module.css";

const Newpost = (props) => {

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: "ADDPOST"});
    };

    const input = () => {
        props.dispatch({
            type: "INPUTPOST",
            postimput: (newPostElement.current.value )
        });
    };

    return (
        <div className = {style.newpost}>
            <input onChange = {input} ref ={newPostElement} value = {props.profileInformation.inputValue} /> 
            <button onClick = {addPost}>Опубликовать</button>
        </div>
    );
}

export default Newpost;