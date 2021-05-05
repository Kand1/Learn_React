import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsContent/FormsContent";

const maxLength = maxLengthCreator(10)

const MyPosts = (props) => {

    let postsElements = props.page.postsData
        .map(p => <Post message={p.message} likes = {p.likes} />)


    let addPost = (formData) => {
        props.addPost(formData.newPostBody)
    }

    return <div className={s.myPostsContent}>
            <h2>My posts</h2>
        <ReduxAddPostForm className = {s.item} onSubmit = {addPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
}


const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.item}>
        <div>
            <Field component={Textarea} name = {"newPostBody"}
                   validate = {[requiredField, maxLength]}/>
        </div>
        <div>
            <button className = {s.item}>Add post</button>
        </div>
    </form>
}

const ReduxAddPostForm = reduxForm({ form: "addPost" })(AddPostForm)




export default MyPosts;