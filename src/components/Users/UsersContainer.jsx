import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import {
    setCurrentPage, setPageSize,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    toggleSub,

} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })



    }

    onPageChange = (pageNumber, pageSize) => {


        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    onPageSizeChange = (current, pageSize) => {
        this.props.setPageSize(pageSize)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

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
            onPageSizeChange = {this.onPageSizeChange}

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
        isFetching: state.usersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    toggleSub,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPageSize,
    toggleIsFetching
})(UsersAPIComponent)


export default UsersContainer