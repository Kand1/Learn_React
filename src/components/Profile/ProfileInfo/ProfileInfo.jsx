import s from './ProfileInfo.module.css';
import headPict from './head.jpg'

const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.header_picture} src={headPict}></img>
        </div>
        <div className={s.profileInfo}>
            ava + desrc
        </div>
    </div>

}

export default ProfileInfo;