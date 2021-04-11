import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {Button} from "antd";

const ProfileInfo = ({profile, status, savePhoto, updateStatus, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>;
    }
    const Contact = ({contactTitle, contactValue}) => {
        return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
    }
/*    const OnMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }*/
    const ProfileData = ({profile, isOwner, goToEditMode}) => {
        debugger
        return <div>
            {isOwner && <div>
                <Button onClick={goToEditMode} type="primary" tyle={{marginRight: "10px"}}style={{marginRight: "10px"}}>edit</Button>
            </div>}
            <div>
                <b>UserName</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob
                ? "Yes"
                : "No"}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Team_WE_logo.png"/>
            </div>
            <div>
                <img src={
                    profile.photos.large != null
                        ? profile.photos.large
                        : "https://image.flaticon.com/icons/png/512/149/149071.png"}
                     className={styles.userPhoto}
                     alt=""
                />
            </div>
            <div>
                {isOwner
                    ? <ProfileStatusWithHooks updateStatus={updateStatus} status={status} profile={profile}/>
                    : <div>
                        <b>Status:</b> <span>{status || "--------"}</span>
                    </div>
                }
                {editMode
                    ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>

    );

};
export default ProfileInfo;
