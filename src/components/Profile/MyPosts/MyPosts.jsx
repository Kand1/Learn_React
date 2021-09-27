import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsContent/FormsContent";

const maxLength = maxLengthCreator(25)

const MyPosts = React.memo((props) => {

    let postsElements = props.page.postsData
        .map(p => <Post message={p.message} likes={p.likes}/>)


    let addPost = (formData) => {
        props.addPost(formData.newPostBody)
    }
    return <div>
        {props.page.profile && <div>
            <ReduxAddPostForm className={s.item} onSubmit={addPost}/>
            <div className={s.myPostsContent}>
                <div className ={s.postsHeader}>
                    {props.page.profile.fullName + " posts"}
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>}
    </div>
})


const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.addPost}>
        <div>
            <Field className={s.addPostField}
                   component={Textarea}
                   name = {"newPostBody"}
                   placeholder={"Enter your post"}
                   validate = {[maxLength]}/>
        </div>
        <div>
            <button className={s.addPostButton}>Add post</button>
        </div>
    </form>
}

const ReduxAddPostForm = reduxForm({ form: "addPost" })(AddPostForm)




export default MyPosts;