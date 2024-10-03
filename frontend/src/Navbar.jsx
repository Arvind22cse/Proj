import React from 'react'
import img from './assets/logo.jpg'
import './Navbar.css'

function Navbar() {
  return (
    <div >
      <nav className="navbar">
        <div className="navbar__left">
          <img src={img} className="logo" />
          <div className="navbar__title">SHB</div>
        </div>
        <ul className="navbarmenu">
          <li><a href="/" style={{color:"white", textDecoration: "none"}} className="home" >Home</a></li>
          <li><a href="/calender" style={{ textDecoration: "none"}} className="hov">SH Bookings</a></li>
          <li><a href="/events" style={{textDecoration: "none"}} className="hov">Events</a></li>
          <li><a href="/card" style={{ textDecoration: "none"}} className="hov">Card</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
