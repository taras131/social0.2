import style from "./Newpost.module.css";
import NewPostForm from "./newpostform/NewPostForm";

const NewPost = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.inputPost);
    }
    return (
        <div className={style.newpost}>
            <NewPostForm onSubmit = {onSubmit} />
        </div>
    )
}

export default NewPost;