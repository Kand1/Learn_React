import s from './ProfileInfo.module.css';
import headPict from './head.jpg'
import avatar from "../../../assets/images/default_avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let allContacts = []

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    for (let key in props.profile.contacts){
        if (props.profile.contacts[key])
        allContacts.push(<div>{key + ': ' +props.profile.contacts[key]}</div>)
    }
    return <div className={s.profileInfo}>
        <div className={s.topBlock}>
        <div className={s.fullN}>
            {props.profile.fullName}
            <div className={s.status}>
                <ProfileStatusWithHooks
                    updateStatus = {props.updateStatus}
                    status ={props.status}/>
            </div>
        </div>
        <div>
            <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : avatar}/>
            {props.isOwner && <input type={"file"} className={s.changeAvatarButton} onChange={mainPhotoSelected}/>}
        </div>
        </div>
        <div className={s.bottomBlock}>
            <div className={s.aboutMe}>
                About me:
            </div>
            <div className={s.aboutMeDescr}>
                {props.profile.aboutMe}
            </div>
            <div className={s.contacts}>
                Contacts:
            </div>
            <div className={s.contactsList}>
                {allContacts}
            </div>
        </div>

    </div>

}

export default ProfileInfo;