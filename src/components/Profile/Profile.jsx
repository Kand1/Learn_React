import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className= {s.profile}>
        <ProfileInfo
            savePhoto = {props.savePhoto}
            isOwner = {props.isOwner}
            status = {props.status}
            updateStatus = {props.updateStatus}
            profile = {props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;