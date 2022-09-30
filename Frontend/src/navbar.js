import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <Link className="navbar-brand" to="/"><img src="/images/shoplogo.svg" style={{width:"50px"}}/></Link>
  <ul className="navbar-nav mx-auto">
    <li className="nav-item ">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item ">
      <Link className="nav-link" to="/about">About us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact Us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/signup">Users</Link>
    </li>
  </ul>
</nav>
  )
}
