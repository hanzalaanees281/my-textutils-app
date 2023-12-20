import React from 'react';
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">{props.logo}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="auth-button">
            <Link className="btn btn-primary mx-1 my-0.5" to="/">Signup</Link>
            <Link className="btn btn-outline-primary my-0.5" to="/">Login</Link>
          </div>

     
            <div className="form-check form-switch custom-switch mx-2">
              <input className="form-check-input" onClick={props.changeMode} type="checkbox" id="customSwitch1" />
            </div>

        </div>
      </div>
    </nav>
  )
}
export default Navbar;
