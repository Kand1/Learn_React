import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {authUser, setAuthUserData} from "../../redux/AuthReducer";
import {setProfilePageUserId} from "../../redux/ProfileReducer";
import {authAPI} from "../../api/api";
import {compose} from "redux";



class SidebarContainer extends React.Component{

    componentDidMount() {
        this.props.authUser()
    }

    render () {
        return (<Sidebar {...this.props}/>)

    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.id
})


export default compose(
    connect(mapStateToProps, {authUser, setAuthUserData, setProfilePageUserId})
)(SidebarContainer)