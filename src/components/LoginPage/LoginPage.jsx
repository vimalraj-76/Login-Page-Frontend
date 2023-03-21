import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import loginLogo from "../login.png";
import './LoginPage.css';
function LoginPage()
{
    return(
        
            <div className="login-mainPage">
            <h2 className="login-heading">Login  Page</h2>
            <div className='logo'>
            <img src={loginLogo} alt='profile-logo'></img>
            </div>
            <div className="login-form">
                <LoginForm></LoginForm>
            </div>
            </div>
    );
}
export default LoginPage;