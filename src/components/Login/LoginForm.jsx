import {Field} from "redux-form";
import {required} from "../utilits/validators/validators";
import React from "react";
import style from "./Login.module.css"
import {Button, Checkbox, Form, Input} from "antd";
import {makeField} from "../common/AntD/MakeField";

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