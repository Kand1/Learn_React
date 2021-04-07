import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {setProfilePageUserId, setUserProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";


class ProfileAPIComponent extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userid
        if (!userID) {
            userID = this.props.authUserId
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }



    render () {

        this.props.setProfilePageUserId(this.props.match.params.userid)
        return (<Profile {...this.props} profile = {this.props.profile} />)

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.id,
    profilePageUserId: state.profilePage.profilePageUserId
})

const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent)

const ProfileContainer = connect(mapStateToProps, {setUserProfile, setProfilePageUserId})(WithUrlDataContainerComponent)

export default ProfileContainer