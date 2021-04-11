import React from "react";
import {createField} from "../../common/FormsControls/FormsControl";
import {reduxForm} from "redux-form";
import styles from "./ProfileInfo.module.css";
import {makeField} from "../../common/AntD/MakeField";
import {Button, Input} from "antd";

const { TextArea } = Input;

const FormInput = makeField(Input);
const FormTextarea = makeField(TextArea);


const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}}>save</Button>
        </div>
        <div>
            <b>UserName</b>: {createField("Full name", "fullName", [], FormInput)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("", "lookingForAJob", [], FormInput, {type: "checkbox"})}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", [], FormTextarea)}
        </div>
        <div>
            <b>My professional
                skills</b>:{createField("My professional skills", "lookingForAJobDescription", [], FormTextarea)}
        </div>
         <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contact}>
                <b>{key}:{createField(key, "contacts." + key, [], FormInput)}</b>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm