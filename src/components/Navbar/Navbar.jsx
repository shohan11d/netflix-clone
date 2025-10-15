import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      }else{
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <Link to="/">
        <img src={logo} alt="" />
        </Link>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} className="icons" alt="" />
        <p>Children</p>
        <img src={bell_icon} className="icons" alt="" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" clasname="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
