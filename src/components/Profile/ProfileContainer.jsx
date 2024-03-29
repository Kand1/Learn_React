import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, setUserProfile, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userid
        if (!userID) {
            if (this.props.isAuth){
                userID = this.props.authUserId
            }
        }
        if (this.props.isAuth) {
            this.props.getProfile(userID)
            this.props.getStatus(userID)
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userid !== prevProps.match.params.userid) {
            let userID = this.props.match.params.userid
            if (!userID) {
                userID = this.props.authUserId
            }

            this.props.getProfile(userID)
            this.props.getStatus(userID)
        }
    }



    render () {
        return (<Profile {...this.props}
                         savePhoto = {this.props.savePhoto}
                         isOwner = {!this.props.match.params.userid || (this.props.match.params.userid === this.props.authUserId)}
                         status = {this.props.status}
                         saveProfile = {this.props.saveProfile}
                         updateStatus = {this.props.updateStatus}
                         profile = {this.props.profile} />)

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)