import s from './ProfileInfo.module.css';
import headPict from './head.jpg'
import avatar from "../../../assets/images/default_avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React, {useState} from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";


export const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle + ": " + (!!contactValue ? contactValue : '')}
    </div>
}

const ProfileData = (props) => {

    let allContacts = []

    for (let key in props.profile.contacts){
        allContacts.push(
            <Contact contactTitle={key}
                     contactValue={props.profile.contacts[key]}
            />)
    }

    return <div className={s.bottomBlock}>
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
        {props.isOwner && <button onClick={props.toEditMode} className={s.editButton}>Edit</button>}
    </div>
}



const ProfileInfo = (props) => {

    const onSubmit = (data) => {
        let defaultProfile = JSON.parse(JSON.stringify(props.profile))
        defaultProfile.aboutMe = data.aboutMe
        defaultProfile.lookingForAJob = true
        defaultProfile.lookingForAJobDescription = '456'
        for(let key in defaultProfile.contacts) {
            if (data.contacts[key])
                defaultProfile.contacts[key] = data.contacts[key]
            else
                defaultProfile.contacts[key] = ''
        }
        let promise = props.saveProfile(defaultProfile)
        promise.then(() => setEditMode(false))

    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    let [editMode, setEditMode] = useState(false)


    return <div className={s.profileInfo}>
        <div className={s.topBlock}>
        <div className={s.fullN}>
            {props.profile.fullName}
            <div className={s.status}>
                <ProfileStatusWithHooks
                    updateStatus = {props.updateStatus}
                    status ={props.status}
                    isOwner={props.isOwner}
                />
            </div>
        </div>
        <div>
            <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : avatar}/>
            {props.isOwner &&
            <label className={s.changeAvatarButton}>
                <input  type={"file"} onChange={mainPhotoSelected}/>
                Change avatar
            </label>
            }
        </div>
        </div>
        {editMode ?
            <ProfileDataForm profile = {props.profile}
                             initialValues = {props.profile}
                             onSubmit = {onSubmit}
                             status = {props.status}/> :
            <ProfileData toEditMode={() => {setEditMode(true)}}
                         isOwner={props.isOwner}
                         profile = {props.profile}
                         status = {props.status}/>
        }


    </div>

}


export default ProfileInfo;