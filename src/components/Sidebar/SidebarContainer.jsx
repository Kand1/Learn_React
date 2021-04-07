import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {setAuthUserData} from "../../redux/AuthReducer";
import {setProfilePageUserId} from "../../redux/ProfileReducer";



class SidebarAPIContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }
            })
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


const SidebarContainer = connect(mapStateToProps, {setAuthUserData, setProfilePageUserId})(SidebarAPIContainer)

export default SidebarContainer