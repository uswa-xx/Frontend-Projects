import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignUp from './components/SignUp'; // Corrected import with uppercase "S"
import SignIn from './components/SignIn';

const Navbar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  
  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false); // Close the other panel when this button is clicked
  };
  
  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(false); // Close the other panel when this button is clicked
  };
  

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <NavLink className="navbar-brand ml-auto" to="/">
            Muft Gpt
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* Add onClick handler to the "Sign Up" button */}
              <button className="btn btn-style btn-style-border" type="button" onClick={handleSignUpClick}>
                Sign up
              </button>
              <button className="btn btn-style btn-style-border" type="button" onClick={handleSignInClick}>
                Sign In
              </button>
            </form>
          </div>
        </nav>
      </section>

      {/* Conditionally render the SignUp component based on the state */}
      {showSignUp && <SignUp />}

      {/* Conditionally render the SignIn component based on the state */}
      {showSignIn && <SignIn />}
    </>
  );
};

export default Navbar;
