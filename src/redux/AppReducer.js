import {authUser} from "./AuthReducer";

const SET_INITIALIZED = "app/SET-INITIALIZED"

let initialState = {
    initializedSet: false
};

export const setInitialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authUser())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })

}


export const AppReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZED: {

            return {
                ...state,
                initializedSet: true
            }
        }
        default:
            return state;
    }
    return state;
}

export default AppReducer;