import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}

export const getUsersForTestReselect = createSelector(getUsers , getIsFetching, (users, isFetching) => {
    if (isFetching)
        return users.filter(u => false)
    else
        return users.filter(u => true)
})

