import Dialogs from "./Dialogs";
import React from "react";
import {
    addMessageActionCreate, changeIdActionCreate,
    updateNewMessageTextActionCreate,
} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        page: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText:(text) => {dispatch(updateNewMessageTextActionCreate(text));},
        addMessage: () => {dispatch(addMessageActionCreate());},
        changeId: (id2) => {dispatch(changeIdActionCreate(id2));}
    }
}







export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)