import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {authUser, loginUser, logoutUser, setAuthUserData} from "../../redux/AuthReducer";
import {getProfile, setProfilePageUserId} from "../../redux/ProfileReducer";
import {compose} from "redux";
import Login from "./Login";



class LoginContainer extends React.Component{

    componentDidMount() {

    }

    render () {
        return (<Login sendLogin = {this.sendLogin} {...this.props}/>)
    }

    sendLogin = (formData) => {
        this.props.loginUser(formData.login, formData.password, formData.rememberMe)
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {
        loginUser,
        logoutUser
        })
)(LoginContainer)