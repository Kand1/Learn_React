import s from "./User.module.css";
import avatar from "../../assets/images/default_avatar.jpg";
import React from "react";

let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )

    let pages = []

    for (let i = 1; i <= 10; i++){
        pages.push(i);
    }

    pages.push(pagesCount);

    return <div>
        <div>
            {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChange(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                }
            )}
        </div>
        {props.users.map(
            u => {
                return (<div key={u.id}>
            <span>
            <div> <img className={s.avatar}
                       src={u.photos.small != null ? u.photos.small : avatar}/> </div>
            <div>
        {u.followed ? <button onClick={() => {
                props.toggleSub(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                props.toggleSub(u.id)
            }}>Follow</button>}
            </div>
            </span>
                    <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
            </span>
            </span>
                </div>)
            }
        )}
    </div>
}

export default Users