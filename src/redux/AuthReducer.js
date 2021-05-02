import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, toggleSub} from "./UsersReducer";

const SET_USER_DATA = "SET-USER-DARA";

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data})



export const authUser = () => (dispatch) => {

    authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {

                dispatch(setAuthUserData(data.data))
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
        default:
            return state;
    }
    return state;
}

export default AuthReducer;