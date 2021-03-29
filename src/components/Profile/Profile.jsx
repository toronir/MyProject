import React from "react";
import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const   Profile = (props) => {

  return (
    <div className={profile.content}>
      <ProfileInfo savePhoto={props.savePhoto}
                   isOwner={props.isOwner}
                   profile={props.profile}
                   updateStatus={props.updateStatus}
                   status={props.status}
                   saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
