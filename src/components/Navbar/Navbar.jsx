import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logo.png'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="navbar-brand">
        <Link to="home">
          <img src={Logo} alt="Logo" className="logo-navbar" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="home" className="nav-button">Home</Link>
        <Link to="about" className="nav-button">About Me</Link>
      </div>
    </nav>
  </>
}

