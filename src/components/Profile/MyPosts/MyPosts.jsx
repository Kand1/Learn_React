import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.page.postsData
        .map(p => <Post message={p.message} likes = {p.likes} />)

    let newPostEl = React.createRef();

    let addPostButtonClick = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", postMessage: text});
    }
    return <div className={s.myPostsContent}>
            <h2>My posts</h2>
            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostEl} value={props.page.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostButtonClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
}

export default MyPosts;