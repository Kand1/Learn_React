import s from './Post.module.css';
import avatar from '../../../../assets/images/default_avatar.jpg'

const Post = (props) => {
    return <div className={s.item}>
        <img className={s.postImage} src = {avatar}></img>
        <div className={s.postMessage}>
            {props.message}
        </div>
        <div>
            <button className={s.likeButton}>{"🤍 " + props.likes}</button>
        </div>
    </div>
}

export default Post;