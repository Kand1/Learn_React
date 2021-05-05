import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, toggleSub} from "./UsersReducer";

const SET_USER_DATA = "SET-USER-DARA";
const DELETE_USER_DATA = "DELETE-USER-DATA"

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
export const deleteAuthUserData = () => ({type: DELETE_USER_DATA})



export const authUser = () => (dispatch) => {

    authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {

                dispatch(setAuthUserData(data.data))
            }
        })

}

export const loginUser = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authUser())
            }
        })
}

export const logoutUser = () => (dispatch) => {

    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(deleteAuthUserData())
            }
        })
}


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        }
        case DELETE_USER_DATA: {

            return {
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        }
        default:
            return state;
    }
    return state;
}

export default AuthReducer;