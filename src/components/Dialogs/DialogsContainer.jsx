import Dialogs from "./Dialogs";
import React from "react";
import {
    addMessageActionCreate, changeIdActionCreate,
    updateNewMessageTextActionCreate,
} from "../../redux/DialogsReducer";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        page: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText:(text) => {dispatch(updateNewMessageTextActionCreate(text));},
        addMessage: () => {dispatch(addMessageActionCreate());},
        changeId: (id2) => {dispatch(changeIdActionCreate(id2));}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;