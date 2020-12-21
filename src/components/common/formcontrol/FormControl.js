import style from  "./FormControl.module.css";
import React, {FC} from "react";

export const TEXTAREAINPUT = (selector) => ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return(
        <div className={style.form +" "+ (showError? style.error :"")}>
            <div>
                {selector === "textarea"
                ? <textarea {...input} {...props} />
                : <input {...input} {...props} />}
            </div>
            {showError&& <span> {meta.error} </span>}
        </div>
    )
}