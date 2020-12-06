import React, {useEffect, useState} from "react";
import style from"../ProfileDiscription.module.css";

const MyStatusWithHooks = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const activeEditMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }
    const diactivateEditMode = () => {
        setEditMode(false);
        props.updateMyStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (<div className={style.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activeEditMode}>{props.status || "Ведите Ваш статус здесь"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={diactivateEditMode} autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default MyStatusWithHooks;