import React, {useEffect, useState} from "react";

const MyStatusWithHooks = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);
    useEffect(()=> {
        setStatus(props.status);
    },[props.status]);
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