import style from "./Newpost.module.css";
import NewPostForm from "./newposrform/NewPosrForm";

const NewPost = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.inputPost);
    }
    return (
        <div className={style.newpost}>
            <NewPostForm onSubmit = {onSubmit} />
        </div>
    )
}

export default NewPost;