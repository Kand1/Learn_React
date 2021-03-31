const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export const followAC = (id) => ({type: FOLLOW, userid: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userid: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});

let initialState = {
    newPostText: '',
    /*users: [
        {id: 0, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: false, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
        {id: 1, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: true, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
        {id: 2, avatarURL: 'https://cs5.pikabu.ru/post_img/big/2014/05/24/7/1400926434_1123623576.jpg', followed: false, fullname: 'thats ggg', status: '8', location: {city: 'moscow', country: 'russia'}},
    ]*/
    users: []
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userid ? {...u, followed: true} : u);
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userid ? {...u, followed: false} : u);
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]

            };
        }
        default:
            return state;
    }
    return state;
}



export default UsersReducer;