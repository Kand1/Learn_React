import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleSubAC,

} from "../../redux/UsersReducer";



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })



    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChange = {this.onPageChange}
            users = {this.props.users}
            toggleSub = {this.props.toggleSub}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleSub: (userid) => {dispatch(toggleSubAC(userid))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (curP) => {dispatch(setCurrentPageAC(curP))},
        setTotalUsersCount: (totalC) => {dispatch(setTotalUsersCountAC(totalC))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);


export default UsersContainer;