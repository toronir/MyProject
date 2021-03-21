import profileReducer, {
    addPostActionCreator,
    deletePostActionCreator, resetProfileAction,
    setStatus,
    setUserProfile
} from "./Profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 0, message: "post1", likesCount: 12},
        {id: 1, message: "post2", likesCount: 22},
        {id: 2, message: "post3", likesCount: 14},
    ],
    profile: null,
    status: "",
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("poehali-v-ukrainu")

    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(4);
});
test('massage of new post should be correct', () => {
    let action = addPostActionCreator("poehali-v-ukrainu")

    let newState = profileReducer(state,action)
    expect (newState.posts[3].message).toBe("poehali-v-ukrainu");
});
test('after deleting length of massages should be decrement', () => {
    let action = deletePostActionCreator(1)

    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(3);
});
test('status should be correct', () => {
    let action = setStatus("Goodbye America")

    let newState = profileReducer(state,action)
    expect (newState.status).toBe("Goodbye America");
});
test('profile should be correct', () => {
    let action = setUserProfile(2)

    let newState = profileReducer(state,action)
    expect (newState.profile).toBe(2);
});
test('after reset profile should be null', () => {
    let action = resetProfileAction

    let newState = profileReducer(state,action)
    expect (newState.profile).toBe(null);
});


