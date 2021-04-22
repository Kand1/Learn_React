const TOGGLE_SUB = "TOGGLE-SUB"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_PAGE_SIZE = "SET-PAGE-SIZE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS"

export const toggleSub = (id) => ({type: TOGGLE_SUB, userid: id})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (curP) => ({type: SET_CURRENT_PAGE, curP})
export const setTotalUsersCount = (totalC) => ({type: SET_TOTAL_USERS_COUNT, totalC})
export const setPageSize = (pageS) => ({type: SET_PAGE_SIZE, pageS})


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
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
        case SET_PAGE_SIZE: {

            return {
                ...state,
                pageSize: action.pageS
            }
        }
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {

            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}



export default UsersReducer;