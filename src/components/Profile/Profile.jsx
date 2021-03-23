import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className= {s.profile}>
        <ProfileInfo />
        <MyPosts
            page = {props.page}
            dispatch = {props.dispatch}
        />
    </div>
}

export default Profile;