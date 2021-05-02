import s from './ProfileInfo.module.css';
import headPict from './head.jpg'
import avatar from "../../../assets/images/default_avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React from "react";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    let allContacts = []

    for (let key in props.profile.contacts){
        allContacts.push(<div>{key + ':' +props.profile.contacts[key]}</div>)
    }

    return <div className={s.profileInfo}>
        <div>
            <img className={s.header_picture} src={headPict}></img>
        </div>
        <div className={s.fullN}>
            {props.profile.fullName}
        </div>
        <div>
            <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : avatar}/>
        </div>
        <div>
            <ProfileStatus
                updateStatus = {props.updateStatus}
                status ={props.status}/>
            About me: {props.profile.aboutMe}
        </div>
        <div>
            {props.profile.lookingForAJob ? ('Ищу работу: ' + props.profile.lookingForAJobDescription) : null}
        </div>
        <div>
            Contacts:
        </div>
        <div>
            {allContacts}
        </div>
    </div>

}

export default ProfileInfo;