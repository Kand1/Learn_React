import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import { Redirect } from 'react-router';
import {
    follow,
    requestUsers,
    setCurrentPage, setPageSize, followingStatusChange,
    toggleFollowingProgress,
    toggleSub, unfollow,

} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/UsersSelectors";




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
            followingProgress = {this.props.followingProgress}
            followingStatusChange = {this.props.followingStatusChange}

        />}
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        setPageSize,
        getUsers: requestUsers,
        followingStatusChange,

    }),

)(UsersContainer)