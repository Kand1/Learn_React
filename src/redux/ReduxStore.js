import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

let reducersPack = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer
});


let store = createStore(reducersPack);

export default store;