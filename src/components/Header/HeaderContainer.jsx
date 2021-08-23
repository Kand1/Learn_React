import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {authUser, logoutUser, setAuthUserData} from "../../redux/AuthReducer";
import Header from "./Header";


class HeaderContainer extends React.Component{

    render () {
        return (<Header {...this.props} logout = {this.sendLogout}/>)

    }

    sendLogout = () => {
        this.props.logoutUser()
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.id,
    photoSmall: state.auth.small,
    photoLarge: state.auth.large
})


export default compose(
    connect(mapStateToProps, {authUser, logoutUser, setAuthUserData})
)(HeaderContainer)