import {connect} from "react-redux";
import PostPublished from "./PostPublished";
import React from "react";


const mapStateToProps = (state) =>{
    return {
        postData: state.profileInformation.postData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return { }
}
const PostPublishedContainer = connect(mapStateToProps, mapDispatchToProps)(PostPublished);

export default PostPublishedContainer;