import s from './Dialogs.module.css';
import Message from "./Message/Message";
import React from "react";
import {Route} from "react-router-dom";



const Messages = (props) => {

    let userMessages = props.data.messages
        .map(m => <Message data = {m}/>)

    return (<div>
        { userMessages }
    </div>)
}

const Dialogs = (props) => {
    let newMessageEl = React.createRef();


    let addMessageButtonClick = () => {
        props.addMessage();
    }

    let Router = props.page.dialogsData
        .map(m => <Route path={'/dialogs/' + m.id}  render={() =>
            <Messages
                data = {props.page.messagesData[m.id]}/>}/>)


    let onMessageChange = () => {
        let text = newMessageEl.current.value;
        props.updateNewMessageText(text);
    }

    return (

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { props.dialogsElements }
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