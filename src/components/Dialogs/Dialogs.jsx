import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {
    addMessageActionCreate,
    changeIdActionCreate,
    updateNewMessageTextActionCreate,
} from "../../redux/DialogsReducer";


const Messages = (props) => {

    let userMessages = props.data.messages
        .map(m => <Message data = {m}/>)

    return (<div>
        { userMessages }
    </div>)
}

const Dialogs = (props) => {
    let newMessageEl = React.createRef();

    let dialogsElements = props.page.dialogsData
        .map(dialog => <DialogItem dispatch = {props.dispatch} id = {dialog.id} name ={dialog.name}/>)


    let addMessageButtonClick = () => {
        props.dispatch(addMessageActionCreate());
    }

    let Router = props.page.dialogsData
        .map(m => <Route path={'/dialogs/' + m.id}  render={() =>
            <Messages
                dispatch = {props.dispatch}
                data = {props.page.messagesData[m.id]}/>}/>)


    let onMessageChange = () => {
        let text = newMessageEl.current.value;
        props.dispatch(updateNewMessageTextActionCreate(text));
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
                <div className={s.addMessage}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageEl} value={props.page.newMessageText}></textarea>
                    </div>
                    <div >
                        <button onClick={addMessageButtonClick}>Send Message</button>
                    </div>
                </div>
            </div>

    )
}



export default Dialogs;