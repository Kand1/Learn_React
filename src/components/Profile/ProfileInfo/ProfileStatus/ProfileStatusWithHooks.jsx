import React, {useEffect, useState} from "react";
import s from '../ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) =>{

        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)

        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        const activateEditMode = () => {
                setEditMode(true)
            }

        const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return <div className={s.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={props.isOwner ? activateEditMode : () => {}}>
                    {(props.status === null || props.status === "") ?
                        <div>{props.isOwner ? "Введите статус" : "Без статуса"}</div> :
                        <div>{props.status}</div>}
                </span>
            </div>}
            {editMode &&
            <div>
                <input className={s.statusInput} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>}
        </div>

}

export default ProfileStatusWithHooks