const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_PAGE_USER_ID = "SET-PROFILE-PAGE-USER-ID"

export const setProfilePageUserId = (profilePageUserId) => ({type: SET_PROFILE_PAGE_USER_ID, profilePageUserId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreate
    = (text) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text});

let initialState = {
    newPostText: '',
    postsData: [
        {message: 'thats ggg', likes: '8'},
        {message: 'thats was wp', likes: '4'},
        {message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
        {message: 'wp brat', likes: '-1'},
        {message: 'lol < -1', likes: '-2'}
    ],
    profile: null,
    profilePageUserId: null
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likes: '0'
            };
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.postMessage
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_PROFILE_PAGE_USER_ID: {

            return {
                ...state,
                profilePageUserId: action.profilePageUserId

            }

        }
        default:
            return state;
    }
    return state;
}

export default ProfileReducer;