import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import './SignupForm.css';
function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: '',
    mobile: '',
    email: '',
    age: '',
    country: '',
    gender: '',
    dob: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: formData.Name,
      mobile: formData.mobile,
      email: formData.email,
      age: formData.age,
      country: formData.country,
      gender: formData.gender,
      dob: formData.dob,
      password: formData.password,
    };
    if (
      data.name !== "" &&
      data.mobile !== "" &&
      data.email !== "" &&
      data.age !== "" &&
      data.country !== "" &&
      data.gender !== "" &&
      data.dob !== "" &&
      data.password !== ""
    ) {
      if (
        data.password.length < 8 ||
        !/\d/.test(data.password) ||
        !/[a-zA-Z]/.test(data.password)
      ) {
        window.alert(
          "Password must be at least 8 characters and contain both letters and numbers"
        );
        return;
      }
      try {
        const response = await axios.post("http://localhost:5000/signup", data);
        navigate("/");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(
            "This email already exists, try to Log in or Signup up with another e-mail !!"
          );
        } else {
          console.error(error);
        }
      }
    } else {
      window.alert("Please fill in all the required fields.");
    }
  };
  const countries = [
    'Afghanistan',
    'China',
    'UK',
    'Jamaica',
    'USA',
    'Ireland',
    'Italy',
    'India',
  ];

  return (<div className='form-container'>
    <form>
    <div className='formElements'>
      <label>
        Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </label>
      <br />
      </div>
      <div className='formElements'>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <br />
      </div>
      <div className='formElements'>
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      </div>
      <div className='formElements'>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </label>
      <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>   
      </div>   
      <br/>
      <NavLink onClick={handleSubmit} className='signup-button'>Sign Up</NavLink>

      <p>Already an User? <strong>Login below !!</strong></p>
      <NavLink to="../" className='login-button'>Log In</NavLink>
    </form>
    </div>);
}
export default SignupForm;