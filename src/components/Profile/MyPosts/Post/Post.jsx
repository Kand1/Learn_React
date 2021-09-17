import s from './Post.module.css';
import avatar from '../../../../assets/images/default_avatar.jpg'

const Post = (props) => {
    return <div className={s.item}>
        <img className={s.postImage} src = {avatar}></img>
        <div className={s.postMessage}>
            {props.message}
        </div>
        <div className={s.like}>
            <button className={s.likeButton}>♡</button>
            <div className={s.likesCount}>
                {props.likes}
            </div>
        </div>
    </div>
}

export default Post;