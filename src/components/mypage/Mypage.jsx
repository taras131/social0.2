import React from "react";
import Screen from "./screen/Screen";
import Ava from "./ava/Ava";
import Post from "./post/Post";
import style from "./Mypage.module.css";

const Mypage = (props) =>{
    return (
        <div className = {style.mypage}>
            <Screen/>  
            <Ava/>
            <Post profileInformation = {props.profileInformation} 
                  dispatch = {props.dispatch} />
        </div>
    );
}

export default Mypage;