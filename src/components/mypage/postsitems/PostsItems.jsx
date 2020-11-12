import style from "./PostsItems.module.css";
import NewpostContainer from "./post_item/newpost/NewpostContainer";
import React from "react";
import PostPublishedContainer from "./post_item/postpublished/PostPublishedContainer";

const PostsItems = (props) =>{
    return (
        <div className = {style.post}>
            <h2>Мои сообщения</h2>
            <NewpostContainer />
            <PostPublishedContainer />
        </div> 
    );
}

export default PostsItems;