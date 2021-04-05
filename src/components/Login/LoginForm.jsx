import {Field} from "redux-form";
import {required} from "../utilits/validators/validators";
import React from "react";
import style from "./Login.module.css"
import {Button, Checkbox, DatePicker, Form, Input, Radio, Select} from "antd";

const FormItem = Form.Item;


const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 6}
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 14}
  }
};


const makeField = Component => ({input, meta, children, hasFeedback, label, ...rest}) => {
  const hasError = meta.touched && meta.invalid;
  return (
      <FormItem
          {...formItemLayout}
          label={label}
          validateStatus={hasError ? "error" : "success"}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
      >
        <Component {...input} {...rest} children={children}/>
      </FormItem>
  );
};

const AInput = makeField(Input);
const ACheckbox = makeField(Checkbox);


export const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field  placeholder={"Email"} name={"email"} component={AInput} validate={required}/>
        </div>
        <div>
          <Field  placeholder={"Password"} name={"password"} type={"password"} component={AInput} validate={required}/>
        </div>
        <div>
          <Field label="remember me" component={ACheckbox} name={"rememberMe"} type={"checkbox"}/>
        </div>
        {props.error && <div className={style.formSummaryError}>
          {props.error}
        </div>
        }
        <div>
          <Button type="primary" htmlType="submit" style={{marginRight: "10px"}}>
            Login
          </Button>
        </div>
      </form>
  )
}