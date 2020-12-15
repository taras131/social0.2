import style from "./Newpost.module.css";
import NewPostForm from "./newpostform/NewPostForm";
import {reset} from "redux-form";
import {FC} from "react";

type PropsType = {
    addPost: (inputPost: string)=> void
}
const NewPost: FC<PropsType> = ({addPost}) => {
    const onSubmit = (formData: any, dispatch: any) => {
        addPost(formData.inputPost);
        dispatch(reset("addPost"));
    }
    return (
        <div className={style.newpost}>
            <NewPostForm onSubmit = {onSubmit} />
        </div>
    )
}

export default NewPost;