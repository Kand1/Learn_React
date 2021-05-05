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

        addMessage: (text) => {dispatch(addMessageActionCreate(text));},
        changeId: (id) => {dispatch(changeIdActionCreate(id));}
    }
}







export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)