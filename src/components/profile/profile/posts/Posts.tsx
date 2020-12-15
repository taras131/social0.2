import React, {FC} from "react";
import ExistingPosts from "./existingposts/ExistingPosts";
import NewPost from "./newpost/NewPost";
import Preloader from "../../../common/preloader/preloader";
import {PostDataType, ProfileType} from "../../../../types/Types";

type PropsType ={
    postData: Array<PostDataType>
    profile: ProfileType | null
    addPost: (text: string) => void
}
const Posts: FC<PropsType> = ({postData,profile,addPost}) => {
    let postsElements = postData.map(item => {
        return (<ExistingPosts name="Taras" key={item.id} text={item.text} count={item.likescount}
                               profile={profile}/>)
    })
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <NewPost addPost={addPost}/>
            {postsElements}
        </div>
    )
}

export default Posts;