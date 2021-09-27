import s from "./User.module.css";
import avatar from "../../assets/images/default_avatar.jpg";
import React from "react";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";


let User = ({u, followingProgress, followingStatusChange}) => {

    return (
            <div key={u.id} className={s.user}>
                <NavLink to={'/profile/' + u.id}>
                <img className={s.avatar}
                     src={u.photos.small != null ? u.photos.small : avatar}/>
                </NavLink>

            <div className = {s.followButton}>
        {u.followed ? <button className = {s.button} disabled={followingProgress.some(id => id === u.id)} onClick={() => {


                followingStatusChange(u.id, false)


            }}>Unfollow</button>
            : <button className = {s.button} disabled={followingProgress.some(id => id === u.id)} onClick={() => {

                followingStatusChange(u.id, true)


            }}>Follow</button>}
            </div>
            <div className = {s.name}>{u.name}</div>
            <div className = {s.status}>{u.status}</div>
            </div>
    )
}

export default User