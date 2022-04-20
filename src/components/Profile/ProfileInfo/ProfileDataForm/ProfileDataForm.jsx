import s from "../ProfileInfo.module.css";
import React from "react";
import {Input} from "../../../common/FormsContent/FormsContent";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../../utils/validators/validators";
import Login from "../../../Login/Login";

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle + ": "}
        <Field component={Input} name = {'contacts.' + contactTitle} placeholder={contactTitle}/>
    </div>
}

const ProfileDataForm = ({handleSubmit, error, profile}) => {

    let allContacts = []

    for (let key in profile.contacts){
        allContacts.push(
            <Contact contactTitle={key}
                     contactValue={profile.contacts[key]}
            />)
    }

    return <form onSubmit={handleSubmit} className={s.bottomBlock}>

        <div className={s.aboutMe}>
            About me:
        </div>
        <div className={s.aboutMeDescr}>
            <Field component={Input} name = {"aboutMe"} placeholder={"About me"}/>
        </div>
        <div className={s.contacts}>
            Contacts:
        </div>
        <div className={s.contactsList}>
            {allContacts}
        </div>
        <button  className={s.editButton}>Confirm</button>
    </form>
}

const ReduxEditProfileForm = reduxForm({ form: "editProfile" })(ProfileDataForm)

export default ReduxEditProfileForm;