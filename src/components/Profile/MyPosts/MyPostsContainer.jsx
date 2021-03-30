import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPostButtonClick = () => {
        props.store.dispatch(addPostActionCreate());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreate(text));
    }
    return (<MyPosts updateNewPostText = {onPostChange} addPost = {addPostButtonClick} page = {props.store.getState().profilePage}/>)
}

export default MyPostsContainer;