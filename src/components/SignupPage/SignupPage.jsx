import React from "react";
import "./SignupPage.css"
import profileLogo from '../sign-up.png';
import SignupForm from "./SignupForm/SignupForm"
function SignupPage()
{
    return(<div className="signupPage">
            <h1><strong>Signup Page</strong></h1>
            <div className='logo'>
            <img src={profileLogo} alt='profile-logo'></img>
        </div>
    <SignupForm></SignupForm>
    </div>);
}
export default SignupPage;