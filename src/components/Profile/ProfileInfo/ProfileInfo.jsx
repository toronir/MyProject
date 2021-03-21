import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const  ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
       if (e.target.files.length) {
           props.savePhoto(e.target.files[0]);
       }
    }

    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Team_WE_logo.png"/>
            </div>
            <div>
                <img src={
                    props.profile.photos.large != null
                        ? props.profile.photos.large
                        : "https://image.flaticon.com/icons/png/512/149/149071.png"}
                     className={styles.userPhoto}
                     alt=""
                />
            </div>
            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>

    );
};
export default ProfileInfo;
