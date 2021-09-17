import s from "./User.module.css";
import avatar from "../../assets/images/default_avatar.jpg";
import React from "react";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";


let User = ({u, followingProgress, followingStatusChange}) => {

    return (<div>
            <div key={u.id}>
            <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img className={s.avatar}
                     src={u.photos.small != null ? u.photos.small : avatar}/>
                </NavLink>
            </div>
            <div>
        {u.followed ? <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {


                followingStatusChange(u.id, false)


            }}>Unfollow</button>
            : <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {

                followingStatusChange(u.id, true)


            }}>Follow</button>}
            </div>
            </span>
                <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            </span>
            </div>
        </div>
    )
}

export default User