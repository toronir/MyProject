import {authAPI} from "../components/Api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_AUTH_USER_PROFILE = "auth/SET_AUTH_USER_PROFILE";
let initialState = {
    authProfile: null,
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_AUTH_USER_PROFILE:
                return {...state,
                    authProfile: action.authProfile,
                };
        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth},
});
export const setAuthUserProfile = (authProfile) => ({
    type: SET_AUTH_USER_PROFILE,authProfile

});
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        Promise.resolve(dispatch(setAuthUserData(id, email, login, true))).then(
            () => dispatch(getAuthUserProfile(id)));
        console.log(initialState.id)
    }
};
export const getAuthUserProfile = (userId) => async (dispatch) => {debugger
    let response = await authAPI.getAuthUserProfile(userId)


        dispatch(setAuthUserProfile(response.data));

};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe,)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }

}
export const logout = (e) => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export default authReducer;
