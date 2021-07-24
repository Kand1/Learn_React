
import React from "react";
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import { Redirect } from 'react-router';
import User from "./User";

let Users = (props) => {

    if (props.isAuth == false)
        return <Redirect to={"/login"}/>

    return (<div>
            <Pagination
                defaultCurrent={props.currentPage}
                defaultPageSize={props.pageSize}
                total={props.totalUsersCount}
                onShowSizeChange = {(current, pageSize) => {props.onPageSizeChange(current, pageSize)}}
                onChange = {(page, pageSize) => {props.onPageChange(page, pageSize)}}
            />
        {props.users.map(
            u => {
                return (<User u = {u}
                              followingProgress = {props.followingProgress}
                              followingStatusChange = {props.followingStatusChange}
                />)
            }
        )}
    </div>
)}

export default Users