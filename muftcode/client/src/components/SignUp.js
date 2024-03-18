import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone, password, confirmpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmpassword
      })
    });

    const data = await res.json();

    if (data.error || !data) {
      window.alert("Invalid Signup!");
      console.log("Invalid Signup!");
    } else {
      window.alert("Signup Successful!");
      console.log("Signup Successful!");

      navigate("./SignIn");
    }
  };

  return (
    <>
      <section className="SignUp">
        <div className="contain mt-5">
          <div className="SignUp-content">
            <div className="SignUp-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="firstname">
                    <i className="zmdi zmdi-account material-icons-Firstname"></i>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="off"
                    value={user.firstname}
                    onChange={handleInput}
                    placeholder="Enter your Firstname"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">
                    <i className="zmdi zmdi-account material-icons-Lastname"></i>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="off"
                    value={user.lastname}
                    onChange={handleInput}
                    placeholder="Enter your Lastname"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-account material-icons-email"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-account material-icons-phone"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter your phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-account material-icons-password"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmpassword">
                    <i className="zmdi zmdi-account material-icons-Confirmpassword"></i>
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    autoComplete="off"
                    value={user.confirmpassword}
                    onChange={handleInput}
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="Signup"
                    id="SignUp"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="SignUp-image">
              <figure>
                <img
                  src="./images/img6.jpg"
                  alt="img6.jpg"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
              <Link to="/Signin" className="SignUp-image-link">I am already registered</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
