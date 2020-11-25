import React from "react";
import ExistingPosts from "./existingposts/ExistingPosts";
import NewPost from "./newpost/NewPost";

const Posts = (props) => {
     let postsElements = props.postData.map(item => {
        return (<ExistingPosts name ="Taras" key = {item.id} text = {item.text} count = {item.likescount} />)})

    return (
        <div>
            <NewPost addPost ={props.addPost} />
            {postsElements}
        </div>
    )

}

export default Posts;