import React, {useState} from "react";

const MyStatusWithHooks = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);
    const activeEditMode = () => {
        setEditMode(true);
    }
    const diactivateEditMode = () => {
        setEditMode(false);
        props.updateMyStatus(status);
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
    return (<div>
        {!editMode &&
            <div>
                <span onDoubleClick = {activeEditMode}>{props.status || "Ведите Ваш статус здесь"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange}  onBlur = {diactivateEditMode} autoFocus={true}
                       value = {status}/>
            </div>
        }
        </div>
)
}

export default MyStatusWithHooks;