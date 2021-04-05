const TOGGLE_SUB = "TOGGLE-SUB"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"


export const toggleSubAC = (id) => ({type: TOGGLE_SUB, userid: id})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (curP) => ({type: SET_CURRENT_PAGE, curP})
export const setTotalUsersCountAC = (totalC) => ({type: SET_TOTAL_USERS_COUNT, totalC})


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
};

export const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SUB: {
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userid ? {...u, followed: !u.followed} : u);
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]

            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.curP
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalC
            }
        }
        default:
            return state;
    }

}



export default UsersReducer;