import React from "react";
import Screen from "./screen/Screen";
import Ava from "./ava/Ava";
import PostsItems from "./postsitems/PostsItems";
import style from "./Mypage.module.css";

const Mypage = () =>{
    return (
        <div className = {style.mypage}>
            <Screen/>  
            <Ava/>
            <PostsItems />
        </div>
    );
}

export default Mypage;