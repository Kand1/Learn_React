import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {setAuthUserData} from "../../redux/AuthReducer";
import {setProfilePageUserId} from "../../redux/ProfileReducer";
import {authAPI} from "../../api/api";



class SidebarAPIContainer extends React.Component{

    componentDidMount() {
        authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {

                    this.props.setAuthUserData(data.data)
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