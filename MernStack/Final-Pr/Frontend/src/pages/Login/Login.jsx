import React, { useEffect } from 'react'
import Header from '../../component/Header';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './login.js';
import './login.css';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = auth?.token?.user?.role;
    if (userRole === "admin") {
      navigate("/admin/dashboard");
  }else if(userRole=== "manager"){
    navigate("/manager/dashboard");
  }else if(userRole=== "user"){
    navigate("/user/dashboard");
    }
    }, [auth, navigate]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("All Fields Are Require.");
      return false;
    }

    let res = await fetch(`http://localhost:8080/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    let user = await res.json();  
    if (user.success) {
      let userlogin = {
        token: user.token,
        user: user.user,
      }
      localStorage.setItem("token", JSON.stringify(user?.user));
      setAuth({
        ...auth,
        token: userlogin,
      });
      const userRole = user?.user?.role;
      toast.success(user?.message);
      if(userRole == "admin"){
        setTimeout = (() =>{
          navigate("admin/dashboard");
        },2000)
      }else if(userRole == "manager"){
        setTimeout(() => {
          navigate("manager/dashboard");
        },2000)
      }
      else if(userRole == "user"){
        setTimeout(() => {
          navigate("user/dashboard");
          },2000)
          }
    } else {
      toast.error(user.message);
    }


  }

  return (
    <>
      <Header />
      <div className="l-form">
        <div className="shape1" />
        <div className="shape2" />
        <div className="form">
          <img src="https://i.postimg.cc/WbVD3VTV/authentication.png" alt="image" className="form-img" />
          <form action="#" className="form-content" onSubmit={handleSubmit}>
            <h3 className="form-title mb-5">Welcome Back</h3>
            <div className="form-div form-div-one ">
              <div className="form-icon">
                <i className="bx bxs-user-circle" />
              </div>
              <div className="form-div-input">

                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' className="form-input" />
              </div>
            </div>
            <div className="form-div">
              <div className="form-icon">
                <i className="bx bx-lock" />
              </div>
              <div className="form-div-input">

                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' className="form-input" />
              </div>
            </div>
            <a href="#" className="form-forgot">Forgot Password?</a>
            <input type="submit" defaultValue="Login" className="form-button" />

          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />

    </>
  )
}

export default Login;
