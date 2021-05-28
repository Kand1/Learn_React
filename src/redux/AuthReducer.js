import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, toggleSub} from "./UsersReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DARA";
const DELETE_USER_DATA = "auth/DELETE-USER-DATA"

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
export const deleteAuthUserData = () => ({type: DELETE_USER_DATA})



export const authUser = () => async (dispatch) => {

    let data = await authAPI.auth()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }

}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(authUser())
            }
            else {
                let err = data.messages.length > 0 ? data.messages[0] : "Undefined error"
                dispatch(stopSubmit("login", {_error: err}))
            }
}

export const logoutUser = () => async (dispatch) => {

    let data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(deleteAuthUserData())
            }
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