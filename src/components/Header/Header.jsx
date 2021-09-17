import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/default_avatar.jpg";
import exit from "./../../assets/images/exit-24px.png"

const Header = (props) => {
    return <header className = {s.header}>
        <div className={s.rightSide}>

                {props.isAuth ?
                    <div className = {s.username}>
                        <NavLink className = {s.username}  to = {'/profile/' + props.userId}>{props.login}</NavLink>
                    </div>
                    : <div className = {s.login}>
                        <NavLink className = {s.login}  to = '/login'>Login</NavLink>
                    </div>}

            {props.isAuth && <div className = {s.logout}>
                <img className = {s.logout} onClick = {props.logout} src = {exit}/>
            </div>}

            {props.isAuth && <img className={s.photo}
                 src = {props.photoSmall ? props.photoSmall :
                     props.photoLarge ? props.photoLarge : avatar}/>}

        </div>

    </header>
}

export default Header;