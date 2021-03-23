import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


const Messages = (props) => {
    props.dispatch({type: "CHANGE-ID", id: props.m.id});
    return <div>
        {props.m.mess}
    </div>
}

const Dialogs = (props) => {
    let newMessageEl = React.createRef();

    let dialogsElements = props.page.dialogsData
        .map(dialog => <DialogItem id = {dialog.id} name ={dialog.name}/>)

    let allDialogs = props.page.messagesData
        .map(m =>{ return {
            mess: m.messages.map(m =>  <Message data = {m} />),
            id: m.id
        }})


    let addMessageButtonClick = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    }

    let Router = allDialogs
        .map(m => <Route path={'/dialogs/' + m.id}  render={() =>
            <Messages
                dispatch = {props.dispatch}
                m = {m}/>}/>)

    let onMessageChange = () => {
        let text = newMessageEl.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", postMessage: text});
    }

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <hr className={s.line1}></hr>
                <div className={s.messages}>
                    { Router }
                </div>
                <hr className={s.line2}></hr>
                <div className={s.addMessage}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageEl} value={props.page.newMessageText}></textarea>
                    </div>
                    <div >
                        <button onClick={addMessageButtonClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}



export default Dialogs;