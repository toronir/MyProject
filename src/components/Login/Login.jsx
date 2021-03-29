import React from "react";
import { reduxForm } from 'redux-form'
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Auth-reducer";
import {Redirect} from "react-router-dom";


const Login = ({login,isAuth}) => {
    const onSubmit = (formData) =>{
        login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }
    if (isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}



const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})
export default connect (mapStateToProps ,{login,logout})(Login);