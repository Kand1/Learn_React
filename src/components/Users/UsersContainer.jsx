import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import {
    setCurrentPage, setPageSize,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    toggleSub,

} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";




class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })



    }

    onPageChange = (currentPage, pageSize) => {


        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(currentPage, pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    onPageSizeChange = (currentPage, pageSize) => {
        this.props.setPageSize(pageSize)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(currentPage, pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
            <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChange = {this.onPageChange}
            users = {this.props.users}
            toggleSub = {this.props.toggleSub}
            toggleFollowingProgress = {this.props.toggleFollowingProgress}
            onPageSizeChange = {this.onPageSizeChange}
            unfollowUser = {usersAPI.unfollowUser}
            followUser = {usersAPI.followUser}
            followingProgress = {this.props.followingProgress}
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
        followingProgress: state.usersPage.followingProgress

    }
}


const UsersContainer = connect(mapStateToProps, {
    toggleSub,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPageSize,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent)


export default UsersContainer