import React, { useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
  const logoutUser = () => {
      setAuth({
        ...auth,
        token: null,
      })
      localStorage.removeItem('token');
      toast.success("User logged out successfully");
      setTimeout(() => {
        navigate('/')
      },2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        document.body.classList.add("fixed");
      } else {
        document.body.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <a href="#">Helloo <span>user</span></a>
        </h1>
        <nav>
          <a href="#" className="selected">Home</a>
          <Link to={'/'}>Sign In</Link>
          <Link to={'/register'}>Sign Up</Link>
          <button className="btn btn-warning btn-sm ms-3" onClick={()=> logoutUser()}>Logout</button>
        </nav>
      </div>
      <div className="header-fixed-placeholder" />
    </header>
    <ToastContainer/>
    </>
  );
};

export default Header;
