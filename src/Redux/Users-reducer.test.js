import usersReducer, {followSuccess, setCurrentPage} from "./Users-reducer";


let state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

test('massage of new post should be correct', () => {
    let action = setCurrentPage(3)

    let newState = usersReducer(state,action)
    expect (newState.currentPage).toBe(3);
});

