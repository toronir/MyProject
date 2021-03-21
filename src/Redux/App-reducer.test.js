import appReducer, {setInitializedSuccess} from "./App-reducer";

let state = {
    initialized: false,
};

test('Initialized should be true', () => {
    let action = setInitializedSuccess(true)

    let newState = appReducer(state,action)
    expect (newState.initialized).toBe(true);
});