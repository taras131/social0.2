import React, {FC, useEffect, useState} from "react";
import style from"../ProfileDiscription.module.css";

type PropsType = {
    status: string
    isOwner: boolean
    updateMyStatus: (tempstatus:string) => void
}
const MyStatusWithHooks: FC<PropsType> = ({status,isOwner,updateMyStatus}) => {
    let [tempstatus, setTempStatus] = useState(status);
    let [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setTempStatus(status);
    }, [status]);
    const activeEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }
    const diactivateEditMode = () => {
        setEditMode(false);
        updateMyStatus(tempstatus);
    }
    const onStatusChange = (e) => {
        setTempStatus(e.currentTarget.value)
    }
    return (<div className={style.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activeEditMode}>{status || "Ведите Ваш статус здесь"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={diactivateEditMode} autoFocus={true}
                       value={tempstatus}/>
            </div>
            }
            <div className={style.statusdiscription}>Кликнете дважды для установки статуса</div>
        </div>
    )
}

export default MyStatusWithHooks;