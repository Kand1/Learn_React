const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreate = () => ({type: "ADD-POST"});
export const updateNewPostTextActionCreate
    = (text) => ({type: "UPDATE-NEW-POST-TEXT", postMessage: text});

let initialState = {
    newPostText: '',
    postsData: [
        {message: 'thats ggg', likes: '8'},
        {message: 'thats was wp', likes: '4'},
        {message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
        {message: 'wp brat', likes: '-1'},
        {message: 'lol < -1', likes: '-2'}
    ]
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
        default:
            return state;
    }
    return state;
}

export default ProfileReducer;