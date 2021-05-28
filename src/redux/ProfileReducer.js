import {profileAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./UsersReducer";

const DELETE_POST = "DELETE-POST"
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_PROFILE_PAGE_USER_ID = "SET-PROFILE-PAGE-USER-ID"
const SET_STATUS = "SET-STATUS"

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const addPostActionCreate = (text) => ({type: ADD_POST, text});
export const deletePost = (id) => ({type: DELETE_POST, id});


export const getProfile = (id) => async (dispatch) => {

    let data = await profileAPI.getProfile(id)

            dispatch(setUserProfile(data))


}

export const getStatus = (id) => async (dispatch) => {

    let data = await profileAPI.getStatus(id)

            dispatch(setStatus(data))

}

export const updateStatus = (status) => async (dispatch) => {

    let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0)
            {
                dispatch(setStatus(status))
            }

}


let initialState = {

    postsData: [
        {id: 0, message: 'thats ggg', likes: '8'},
        {id: 1, message: 'thats was wp', likes: '4'},
        {id: 2, message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
        {id: 3, message: 'wp brat', likes: '-1'},
    ],
    profile: null,
    status: ""
};

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.text,
                likes: '0',
                id: state.postsData.length
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
        case DELETE_POST: {

            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.id)
            }
        }
        default:
            return state;
    }
    return state;
}

export default ProfileReducer;