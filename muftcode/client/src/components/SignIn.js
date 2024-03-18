import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    

    if (res.status === 400) {
      const data = await res.json();
      window.alert(data.error || 'Invalid Credentials');
    } else {
      const data = await res.json();
      window.alert('Login Successful');
      console.log('welcome to chat page'); // Navigate to the "Chat" page on successful login
      navigate('/Chat');
    }
  };

  return (
    <>
      <section className="SignIn">
        <div className="container mt-5">
          <div className="SignIn-content">
            <div className="SignIn-form">
              <h2 className="form-title">Sign In</h2>
              <form method="POST" className="login-form" id="login-form" onSubmit={SignInUser}>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-account material-icons-email"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="SignIn"
                    id="SignIn"
                    className="form-submit"
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
            <div className="SignIn-image">
              <figure>
                <img src="./images/img7.jpg" alt="img7.jpg" style={{ width: '100%', height: 'auto' }} />
              </figure>
              <Link to="/Signin" className="SignIn-image-link">
                I am not registered
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;