import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [userimage, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !gender || !city || !contact || !userimage) {
      toast.error('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("city", city);
    formData.append("contact", contact);
    formData.append("userimage", userimage);

    try {
      let res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        body: formData
      });

      let user = await res.json();

      if (user.success) {
        toast.success(user.message);

        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setGender('');
        setCity('');
        setContact('');

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(user.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="l-form">
        <div className="shape1" />
        <div className="shape2" />
        <div className="form">
          <img src="https://i.postimg.cc/WbVD3VTV/authentication.png" alt="authentication" className="form-img" />
          <form className="form-content" onSubmit={handleSubmit}>
            <h3 className="form-title mb-5">Register Yourself</h3>

            <div className="form-div">
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" className="form-input" />
            </div>

            <div className="form-div">
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" className="form-input" />
            </div>

            <div className="form-div">
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" className="form-input" />
            </div>

            <div className="form-div">
              <label className="form-label">Gender</label>
              <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male
              <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female
            </div>

            <div className="form-div">
      <label className="form-label">City</label>
      <select 
        onChange={(e) => {
          setCity(e.target.value);
        }} 
        value={city} 
        className="form-input"
      >
        <option value="">Select City</option>
        <option value="Surat">Surat</option>
        <option value="Vadodara">Vadodara</option>
        <option value="Vapi">Vapi</option>
        <option value="Valsad">Valsad</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
    </div>
            <div className="form-div">
              <input type="text" onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Contact" className="form-input" />
            </div>

            <div className="form-div">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="form-input"
              />
            </div>

            <a href="#" className="form-forgot">Already Have An Account?</a>
            <input type="submit" value="Register" className="form-button" />
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
    </>
  );
}

export default Register;
