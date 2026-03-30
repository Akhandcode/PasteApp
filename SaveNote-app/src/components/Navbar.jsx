import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className='navbar'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/pastes">
            Pastes
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar