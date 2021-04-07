const SET_USER_DATA = "SET-USER-DARA";

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});


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