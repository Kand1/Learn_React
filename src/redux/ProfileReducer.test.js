import ProfileReducer, {addPostActionCreate, deletePost} from "./ProfileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let initialState = {

    postsData: [
        {id: 0, message: 'you can add posts, but they will be same on any page', likes: '8'},
        {id: 1, message: 'likes dont work', likes: '4'},
        {id: 2, message: '(((', likes: '2'},
    ]
};

test('incrementing length of posts check', () => {
    let action = addPostActionCreate("test")
    let newState = ProfileReducer(initialState, action)
    expect(newState.postsData.length).toBe(5)
});

test('message of new post check', () => {
    let action = addPostActionCreate("test")
    let newState = ProfileReducer(initialState, action)
    expect(newState.postsData[4].message).toBe("test")
});

test('decrementing length of posts check', () => {
    let action = deletePost(1)
    let newState = ProfileReducer(initialState, action)
    expect(newState.postsData.length).toBe(3)
});

