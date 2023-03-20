import React from "react";
import "./SignupPage.css"
import SignupForm from "./SignupForm/SignupForm"
function SignupPage()
{
    return(<div className="signupPage">
            <h1>Signup Page</h1>
    <SignupForm></SignupForm>
    </div>);
}
export default SignupPage;