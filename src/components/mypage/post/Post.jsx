import Post_1 from "./post_item/secondpost/Post_1";
import style from "./Post.module.css";
import NewpostContainer from "./post_item/newpost/NewpostContainer";
import React from "react";

const Post = (props) =>{
    let postsElements = props.store.getState().profileInformation.postData.map(item => {
        return <Post_1 name ="Taras" text ={item.text} count ={item.likescount} />
    });
    return (
        <div className = {style.post}>
            <h2>Мои сообщения</h2>
            <NewpostContainer />
            {postsElements}
        </div> 
    );
}

export default Post;