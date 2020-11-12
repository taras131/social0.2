import Post from "./post/Post";
import React from "react";

const PostPublished = (props) =>{
    let postsElements = props.postData.map(item => {
        return <Post name ="Taras" text ={item.text} count ={item.likescount} />
    });
    return( <div>
            {postsElements}
            </div>)
}

export default PostPublished;