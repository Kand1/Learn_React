import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import { Redirect } from 'react-router';
import {
    follow,
    getUsers,
    setCurrentPage, setPageSize,
    toggleFollowingProgress,
    toggleSub, unfollow,

} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (currentPage, pageSize) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsers(currentPage, pageSize)
    }

    onPageSizeChange = (currentPage, pageSize) => {
        this.props.setPageSize(pageSize)
        this.props.getUsers(currentPage, pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader /> :
            <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChange = {this.onPageChange}
            onPageSizeChange = {this.onPageSizeChange}
            users = {this.props.users}
            unfollowUser = {usersAPI.unfollowUser}
            followUser = {usersAPI.followUser}
            followingProgress = {this.props.followingProgress}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}

        />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        setPageSize,
        getUsers,
        follow,
        unfollow
    }),
    withAuthRedirect
)(UsersContainer)