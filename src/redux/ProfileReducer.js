import {profileAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./UsersReducer";

const DELETE_POST = "profile/DELETE-POST"
const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_PROFILE_PAGE_USER_ID = "profile/SET-PROFILE-PAGE-USER-ID"
const SET_STATUS = "profile/SET-STATUS"
const SET_PHOTO = "profile/SET-PHOTO"


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const addPostActionCreate = (text) => ({type: ADD_POST, text});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos});


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

export const savePhoto = (photo) => async (dispatch) => {

    let data = await profileAPI.savePhoto(photo)
    if (data.resultCode === 0)
    {
        dispatch(setPhoto(data.data.photos))
    }

}


let initialState = {

    postsData: [
        {id: 0, message: 'you can add posts, but they will be same on any page', likes: '8'},
        {id: 1, message: 'likes dont work', likes: '4'},
        {id: 2, message: '(((', likes: '2'},
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
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
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
        case SET_PHOTO: {

            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case DELETE_POST: {

            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.id)
            }
        }
        default:
            return state;
    }
    return state;
}

export default ProfileReducer;