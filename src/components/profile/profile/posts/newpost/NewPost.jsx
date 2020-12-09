import style from "./Newpost.module.css";
import NewPostForm from "./newpostform/NewPostForm";
import {reset} from "redux-form";

const NewPost = (props) => {
    const onSubmit = (formData, dispatch) => {
        props.addPost(formData.inputPost);
        dispatch(reset("addPost"));
    }
    return (
        <div className={style.newpost}>
            <NewPostForm onSubmit = {onSubmit} />
        </div>
    )
}

export default NewPost;