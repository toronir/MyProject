import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControl";
import {reduxForm} from "redux-form";
import styles from "./ProfileInfo.module.css";

const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>save</button>
        </div>
        <div>
            <b>UserName</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>My professional
                skills</b>:{createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
         <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contact}>
                <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm