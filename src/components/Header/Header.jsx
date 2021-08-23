import s from './Header.module.css';
import Clocks from "./Clocks";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/default_avatar.jpg";
import exit from "./../../assets/images/exit-24px.png"

const Header = (props) => {
    return <header className = {s.header}>
        <Clocks/>
        <div className={s.rightSide}>
            <div className = {s.username}>
                {props.isAuth ? <NavLink className = {s.username}  to = {'/profile/' + props.userId}>{props.login}</NavLink> : <NavLink to = '/login'>Login</NavLink>}
            </div>
            {props.isAuth && <div className = {s.logout}>
                <img className = {s.logout} onClick = {props.logout} src = {exit}/>
            </div>}
            {props.isAuth && <img className={s.photo}
                 src = {props.photoSmall ? props.photoSmall :
                     props.photoLarge ? props.photoLarge : avatar}
            />}
        </div>

    </header>
}

export default Header;