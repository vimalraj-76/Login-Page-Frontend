import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import './LoginForm.css'
import DisplayPage from '../DisplayPage/DisplayPage';
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const EmailChange = (event) => {
    setEmail(event.target.value);
  }
  const PasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleLogin = async (event) => {
    const data={"email":email,"password":password};
    event.preventDefault(); 
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password))
    {
      window.alert('Password must be at least 8 characters and contain both letters and numbers');
    }
    else
    {
    const postData = async (data) =>
    {
      if(data.email!=='' && data.password!=='')
      {
      try
      {
        const response = await axios.post('http://localhost:5000/login', data);
        if (response.status===201)
        {
          const data = response.data;
          localStorage.setItem('token', data.token);
          const propsData={
            name:response.data.name,
            email:response.data.email,
            age:response.data.age,
            mobile:response.data.mobile,
            gender:response.data.gender,
            country:response.data.country,
            dob:response.data.dob}
          navigate('/index',{state:propsData});
        }
      }
      catch (error) 
      {
        window.alert("Invalid Credentials, if you're a new user Signup first");
      }
      }
      else
      {
        window.alert('Please fill in all the required fields.');
      }
    }
    postData(data);
    };
    }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={email} onChange={EmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={PasswordChange} />
      </div>
      <button className='submit-btn' type='submit'>Log In</button>
      <p>Not an user ? <strong>Create a new account</strong></p>
      <NavLink to="signup" className='signup-btn'>Sign up</NavLink>
    </form>
  );
  }
export default LoginForm;
