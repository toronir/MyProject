import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserStatus, getUserProfile, updateStatus, savePhoto,} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getIsAuth, getProfile, getStatus, getUserId} from "../../Redux/Profile-selectors";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);

  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
    this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}/>;
  }
}
let mapStateToProps = (state) => ({
  profile: getProfile(state),
  isAuth: getIsAuth(state),
  status: getStatus(state),
  authorizedUserId: getUserId(state),
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


