import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {changeIdActionCreate} from "../../../redux/DialogsReducer";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let changeIdOnPage = () => {
        props.changeId(props.id);
    }
    return <div className={s.dialog}>
        <NavLink onClick={changeIdOnPage} to={path} activeClassName = {s.active}>{props.name}</NavLink>
    </div>
}


export default DialogItem;