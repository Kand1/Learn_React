import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
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