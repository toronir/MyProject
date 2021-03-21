import React from "react";
import authReducer, {logout, setAuthUserData} from "./Auth-reducer";


let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};


test('isAuth should be true', () => {
    let action = setAuthUserData(12,"toronir@gmail.com","toronir",true)

    let newState = authReducer(state,action)
    expect (newState.isAuth).toBe(true);
});
test('userId should be correct', () => {
    let action = setAuthUserData(12,"toronir@gmail.com","toronir",true)

    let newState = authReducer(state,action)
    expect (newState.userId).toBe(12);
});
test('email should be correct', () => {
    let action = setAuthUserData(12,"toronir@gmail.com","toronir",true)

    let newState = authReducer(state,action)
    expect (newState.email).toBe("toronir@gmail.com");
});
test('login should be correct', () => {
    let action = setAuthUserData(12,"toronir@gmail.com","toronir",true)

    let newState = authReducer(state,action)
    expect (newState.login).toBe("toronir");
});

