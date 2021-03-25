import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

let reducersPack = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
});


let store = createStore(reducersPack);

export default store;