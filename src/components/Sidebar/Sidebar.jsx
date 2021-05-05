import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return <nav className= {s.nav}>
        <div className = {s.item}>
            <NavLink to='/profile' activeClassName = {s.active}>Profile</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/dialogs' activeClassName = {s.active}>Messages</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/users' activeClassName = {s.active}>Users</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/news' activeClassName = {s.active}>News</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/music' activeClassName = {s.active}>Music</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/settings' activeClassName = {s.active}>Settings</NavLink>
        </div>

        <div className = {s.itemMarg + ' ' + s.item}>
            {props.isAuth ? <NavLink  to = {'/profile/' + props.userId}>{props.login}</NavLink> : <NavLink to = '/login'>Login</NavLink>}
        </div>
        <div className = {s.item}>
            {props.isAuth ? <a onClick = {props.logout}>Log out</a> : <div> </div>}
        </div>
    </nav>
}

export default Sidebar;