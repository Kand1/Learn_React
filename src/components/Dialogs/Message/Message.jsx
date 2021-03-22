import s from './Message.module.css';

const Message = (props) => {

    let sendBy = (props.data.sender == 'user') ? s.user : s.friend;

    let sendByBorder = (props.data.sender == 'user') ? s.userBorder : s.friendBorder;

    let sendByBorderAlign = (props.data.sender == 'user') ? s.userBorderAlign : s.friendBorderAlign;

    return <div className={sendByBorderAlign}>
        <div className={sendByBorder}>
            <div className={sendBy}>
                {props.data.text}
            </div>
        </div>
    </div>
}


export default Message;