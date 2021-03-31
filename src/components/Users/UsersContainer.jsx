import Users from "./Users";
import React from "react";
import {
    addMessageActionCreate, changeIdActionCreate,
    updateNewMessageTextActionCreate,
} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";




let mapStateToProps = (state) => {
    return {
        page: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userid) => {dispatch(followAC(userid));},
        unfollow: (userid) => {dispatch(unfollowAC(userid));},
        setUsers: (users) => {dispatch(setUsersAC(users));}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;