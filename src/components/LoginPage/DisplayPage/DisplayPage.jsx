import React from 'react';
import {NavLink} from 'react-router-dom';
import profileLogo from '../../user-shapes.png';
import './DisplayPage.css';
import { useLocation } from 'react-router-dom';
const DisplayPage = () => {
 const location = useLocation();
 const user={
    name:location.state.name,
    phone:location.state.mobile,
    age:location.state.age,
    email:location.state.email,
    country:location.state.country,
    gender:location.state.gender,
    dob:location.state.dob,
}
  return (
    <div className='display-page'>
        <h1 className='profile'>Your Profile</h1>
        <div className='logo'>
            <img src={profileLogo} alt='profile-logo'></img>
        </div>
        <h2 className='greeting'>Welcome {user.name},</h2>
        <div className='credential-container'>
            <div className='credentials'>

                <div className='cred-element'>
                    <p><div className="userField" style={{justifyContent:"center",display:"flex"}}><strong>Contact</strong></div> <div className='userValue'>{user.phone}</div></p>
                </div>
                
                <div className='cred-element'>
                    <p><div className='userField'><strong>Age</strong></div><div className='userValue' style={{justifyContent:"center",display:"flex"}}>{user.age}</div></p>
                </div>

                <div className='cred-element'>
                    <p><div className="userField" style={{justifyContent:"center",display:"flex"}}><strong>E-mail</strong></div> <div className='userValue'>{user.email}</div></p>
                </div>

                <div className='cred-element'>
                    <p><div className="userField"><strong>Country</strong></div> <div className='userValue' style={{justifyContent:"center",display:"flex"}}>{user.country}</div></p>
                </div>

                <div className='cred-element'>
                    <p><div className="userField"><strong>Gender</strong></div> <div className='userValue' style={{justifyContent:"center",display:"flex"}}>{user.gender}</div></p>
                </div>

                <div className='cred-element'>
                    <p><div className="userField"><strong>Date of birth</strong></div><div className='userValue' style={{justifyContent:"center",display:"flex"}}> {new Date(user.dob).toLocaleDateString()}</div></p>
                </div>
                <NavLink to='https://login-page-backend-3.onrender.com/login' className='log-out'><span>Log Out</span></NavLink> 
            </div>
        </div>
        <br/>
        <div className='developer'><p>Designed and Developed by <strong><a href="https://www.linkedin.com/in/vimalraj-s-206000217/" target={'_blank'}>Vimalraj S</a></strong></p></div>
    </div>
  );
};

export default DisplayPage;