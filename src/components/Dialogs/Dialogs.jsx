import s from './Dialogs.module.css';
import Message from "./Message/Message";
import React from "react";
import {Route} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsContent/FormsContent";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const maxLength = maxLengthCreator(20)

const Messages = (props) => {

    let userMessages = props.data.messages
        .map(m => <Message data = {m}/>)

    return (<div>
        { userMessages }
    </div>)
}

const Dialogs = (props) => {

    return <div>
        <div className={s.header}>
            Messages
        </div>
    </div>
//  todo
    let dialogsElements = props.page.dialogsData
        .map(dialog => <DialogItem changeId = {props.changeId} id = {dialog.id} name ={dialog.name}/>)


    let Router = props.page.dialogsData
        .map(m => <Route path={'/dialogs/' + m.id}  render={() =>
            <Messages
                data = {props.page.messagesData[m.id]}/>}/>)

    let addNewMessage = (formData) => {
        props.addMessage(formData.newMessageBody)
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <hr className={s.line1}></hr>
                <div className={s.messages}>

                    { Router }

                </div>
                <hr className={s.line2}></hr>
                <ReduxAddMessageForm onSubmit = {addNewMessage}/>
            </div>

    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.addMessage}>
        <div>
            <Field component={Textarea} name = {"newMessageBody"}
                   validate = {[requiredField, maxLength]}></Field>
        </div>
        <div >
            <button>Send Message</button>
        </div>
    </form>
}

const ReduxAddMessageForm = reduxForm({ form: "addMessage" })(AddMessageForm)



export default Dialogs;