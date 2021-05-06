import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {authUser, logoutUser, setAuthUserData} from "../../redux/AuthReducer";
import {setProfilePageUserId} from "../../redux/ProfileReducer";
import {authAPI} from "../../api/api";
import {compose} from "redux";



class SidebarContainer extends React.Component{

    render () {
        return (<Sidebar {...this.props} logout = {this.sendLogout}/>)

    }

    sendLogout = () => {
        this.props.logoutUser()
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.id
})


export default compose(
    connect(mapStateToProps, {authUser, logoutUser, setAuthUserData})
)(SidebarContainer)