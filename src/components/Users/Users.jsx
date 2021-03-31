import React from 'react';
import s from "./User.module.css"
let Users = (props) => {
    if (props.page.users.length === 0) {
        props.setUsers([
            {id: 0, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: false, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
            {id: 1, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: true, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
            {id: 2, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: false, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
        ]);
    }
    let usersList = props.page.users.map(
        u => {
            return (<div key = {u.id}>
                <span>
                    <div> <img className={s.avatar} src = {u.avatarURL}/> </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                <span>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
                </span>
            </div>)
        }
    );

    return <div>
        {usersList}
    </div>
}

export default Users;