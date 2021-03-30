import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import React from "react";
import {
    addMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../redux/DialogsReducer";



const DialogsContainer = (props) => {


    let dialogsElements = props.store.getState().dialogsPage.dialogsData
        .map(dialog => <DialogItem dispatch = {props.store.dispatch} id = {dialog.id} name ={dialog.name}/>)


    let addMessageButtonClick = () => {
        props.store.dispatch(addMessageActionCreate());
    }


    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreate(text));
    }

    return ( <Dialogs dialogsElements = {dialogsElements}
                      updateNewMessageText = {onMessageChange}
                      addMessage = {addMessageButtonClick}
                      page = {props.store.getState().dialogsPage}/>)
}



export default DialogsContainer;