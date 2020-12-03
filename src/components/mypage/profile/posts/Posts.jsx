import React from "react";
import ExistingPosts from "./existingposts/ExistingPosts";
import NewPost from "./newpost/NewPost";
import Preloader from "../../../common/preloader/preloader";

const Posts = (props) => {
    let postsElements = props.postData.map(item => {
        return (<ExistingPosts name="Taras" key={item.id} text={item.text} count={item.likescount}
                               profile={props.profile}/>)
    })
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <NewPost addPost={props.addPost}/>
            {postsElements}
        </div>
    )
}

export default Posts;