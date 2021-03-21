
import {getAuthUserData} from "./Auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
let initialState = {
    initialized: false,
};
let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitializedSuccess());
    })

};

export default appReducer;
