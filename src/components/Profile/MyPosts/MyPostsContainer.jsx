import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/ProfileReducer";

import {connect} from "react-redux";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
    return {
        page: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostActionCreate(text))},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;