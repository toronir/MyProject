import {profileAPI, userAPI} from "../components/Api/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const RESET_PROFILE = "profile/RESET_PROFILE";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";


let initialState = {
    posts: [
        {id: 0, message: "post1", likesCount: 12},
        {id: 1, message: "post2", likesCount: 22},
        {id: 2, message: "post3", likesCount: 14},
    ],
    profile: null,
    status: "",
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, post: state.posts.filter(p => p.id != action.postId)}
        }
        case RESET_PROFILE: {
            return {...state, profile: null }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }

};
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    };
};
export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST, postId
    };
};
export const resetProfileAction = () => {
    return {
        type: RESET_PROFILE
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    };
};
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    };
};
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => async (dispatch) => {debugger
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }

}
export default profileReducer;
