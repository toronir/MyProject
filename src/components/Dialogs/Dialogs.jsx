import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {maxLengthCreator, required} from "../utilits/validators/validators";
import {Field, reduxForm} from "redux-form";
import {makeField} from "../common/AntD/MakeField";
import {Input} from "antd";
const { TextArea } = Input;

const FormInput = makeField(Input);
const FormTextarea = makeField(TextArea)

const MaxLength100 = maxLengthCreator(100)
const Dialogs = (props) => {
    let addNewMassage = (values) =>{
      props.sendMessage(values.newMessageText)
    }
    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id}/>
    ));
    let messagesElements = props.dialogsPage.messages.map((message) => (
        <Message message={message.message} dispatch={props.dispatch}/>
    ));

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>{dialogsElements}</div>
            <div className={dialogs.messages}>
                <div>{messagesElements}</div>
                <div>
                  <AddMassageFormRedux onSubmit={addNewMassage}/>
                </div>
            </div>
        </div>
    );
};

const AddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormTextarea} name="newMessageText" placeholder="Enter your massage" validate={[required,MaxLength100]}/>
            </div>
            <div>
              <button>Send</button>
            </div>
        </form>
    )
}
const AddMassageFormRedux = reduxForm ({form:"DialogAddMasageForm"})(AddMassageForm)

export default Dialogs;
