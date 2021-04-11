import React from "react";
import styles from "./FormsControl.module.css";
import {Field} from "redux-form";
import {makeField} from "../AntD/MakeField";
import {Button, Checkbox, Form,Input } from "antd";



//const AInput = makeField(Input);

/*export const FormControl = ({input, meta, child, ...props}) => {

    let hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}
export const FormTextarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}> <textarea {...input} {...restProps}/> </FormControl>
}
export const FormInput = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}> <AInput {...input} {...restProps}/></FormControl>
}*/
export const createField = (placeholder, name, validators, component,props = {}, text) => (
    <div>
    <Field placeholder={placeholder}
           name={name}
           validate={validators}
           component={component}
           {...props}
    /> {text}
    </div>
)