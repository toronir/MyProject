import React from "react";
import {connect} from "react-redux";
import {setCurrentPage,toggleFollowingProgress, getUser, getFollow, getUnfollow} from "../../Redux/Users-reducer";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/Users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {debugger

        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {debugger
        this.props.getUser(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    getUsers={this.props.getUsers}
                    getFollow={this.props.getFollow}
                    getUnfollow={this.props.getUnfollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    portionSize={this.props.portionSize}
                />
            </>
        );
    }
}

/*let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    };
};*/
let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        portionSize: getPortionSize(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        getFollow,
        getUnfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUser,
        getPortionSize,
    }),
    withAuthRedirect
)(UsersContainer)
