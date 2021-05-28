import ProfileReducer, {addPostActionCreate, deletePost} from "./ProfileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let initialState = {

    postsData: [
        {id: 0, message: 'thats ggg', likes: '8'},
        {id: 1, message: 'thats was wp', likes: '4'},
        {id: 2, message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
        {id: 3, message: 'wp brat', likes: '-1'}
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

