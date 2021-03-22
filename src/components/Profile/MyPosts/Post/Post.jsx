import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img className={s.postImage} src = 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg'></img>
        <div className={s.postMessage}>
            {props.message}
        </div>
        <div className={s.like}>
            <button className={s.likeButton}>Like it!</button>
            <div className={s.likeText}>
                like
            </div>
            <div className={s.likesCount}>
                {props.likes}
            </div>
        </div>
    </div>
}

export default Post;