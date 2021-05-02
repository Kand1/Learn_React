import React from "react";
import { Redirect } from 'react-router';
import {connect} from "react-redux"



export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth == false)
                return <Redirect to={"/login"}/>
            return <Component {...this.props}/>

        }
    }

    let mapStateToPropsRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}