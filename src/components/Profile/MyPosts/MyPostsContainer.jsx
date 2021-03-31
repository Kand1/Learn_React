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
        updateNewPostText:(text) => {dispatch(updateNewPostTextActionCreate(text));},
        addPost: () => {dispatch(addPostActionCreate());},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;