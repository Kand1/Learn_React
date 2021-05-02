import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import {getProfile, getStatus, setProfilePageUserId, setUserProfile, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userid
        if (!userID) {
            userID = this.props.authUserId
        }
        this.props.getProfile(userID)
        this.props.getStatus(userID)

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
        if (prevProps.status != this.props.status)
        {
            this.setState({
                status: this.props.status
            })
        }
    }



    render () {
        this.props.setProfilePageUserId(this.props.match.params.userid)
        return (<Profile {...this.props}
                         status = {this.props.status}
                         updateStatus = {this.props.updateStatus}
                         profile = {this.props.profile} />)

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.id,
    profilePageUserId: state.profilePage.profilePageUserId,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setProfilePageUserId,
        getProfile,
        getStatus,
        updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)