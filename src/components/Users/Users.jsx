import s from "./User.module.css";
import avatar from "../../assets/images/default_avatar.jpg";
import React from "react";
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import {setPageSizeAC} from "../../redux/UsersReducer";

let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )

    let pages = []

    for (let i = 1; i <= 10; i++){
        pages.push(i);
    }

    pages.push(pagesCount);

    return <div>
        <div>
            <Pagination
                defaultCurrent={props.currentPage}
                defaultPageSize={props.pageSize}
                total={props.totalUsersCount}
                onShowSizeChange = {(current, pageSize) => {props.onPageSizeChange(current, pageSize)}}
                onChange = {(page, pageSize) => {props.onPageChange(page, pageSize)}}
            />
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