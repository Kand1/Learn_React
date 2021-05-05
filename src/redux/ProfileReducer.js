import {profileAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./UsersReducer";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_PROFILE_PAGE_USER_ID = "SET-PROFILE-PAGE-USER-ID"
const SET_STATUS = "SET-STATUS"

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const addPostActionCreate = (text) => ({type: ADD_POST, text});


export const getProfile = (id) => (dispatch) => {

    profileAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })

}

export const getStatus = (id) => (dispatch) => {

    profileAPI.getStatus(id)
        .then(data => {
            dispatch(setStatus(data))
        })
}

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0)
            {
                dispatch(setStatus(status))
            }
        })
}


let initialState = {

    postsData: [
        {message: 'thats ggg', likes: '8'},
        {message: 'thats was wp', likes: '4'},
        {message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
        {message: 'wp brat', likes: '-1'},
        {message: 'lol < -1', likes: '-2'}
    ],
    profile: null,
    status: ""
};

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.text,
                likes: '0'
            };
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost]
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_STATUS: {

            return {
                ...state,
                status: action.status

            }
        }
        default:
            return state;
    }
    return state;
}

export default ProfileReducer;