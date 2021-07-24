import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/ObjectHelper";

const TOGGLE_SUB = "users/TOGGLE-SUB"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT"
const SET_PAGE_SIZE = "users/SET-PAGE-SIZE"
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "users/TOGGLE-FOLLOWING-PROGRESS"

export const toggleSub = (id, isFollow) => ({type: TOGGLE_SUB, userId: id, isFollow: isFollow})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (curP) => ({type: SET_CURRENT_PAGE, curP})
export const setTotalUsersCount = (totalC) => ({type: SET_TOTAL_USERS_COUNT, totalC})
export const setPageSize = (pageS) => ({type: SET_PAGE_SIZE, pageS})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))


}

export const followingStatusChange = (id, isFollow) => async (dispatch) => {

    dispatch(toggleFollowingProgress(true, id))
    let data = null
    if (isFollow){
        data = await usersAPI.followUser(id)
    }else {
        data = await usersAPI.unfollowUser(id)
    }

    if (data.resultCode === 0) {
        dispatch(toggleSub(id, isFollow))
        dispatch(toggleFollowingProgress(false, id))
    }


}



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
                users: updateObjectInArray(state.users, action.userId, "id",
                    {followed: action.isFollow})
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