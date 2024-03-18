import React from "react";
import workapi from "./API/workApi"

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                All Your Answers <br /> At One Place.
              </h1>
              <p className="main-hero-para">
              
                Muft Gpt will help you get all your answers from different search engines at one place , 
                analyze your documents and much more!
              </p>
              <h3>Get early access by Signing Up!</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="images/mainHero.jpg"
                alt="heroimg2"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;