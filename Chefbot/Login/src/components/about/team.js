import React, { Component } from "react";
import "./team.css";
import img1 from "./developers/uswa.jpg";
import img2 from "./developers/mushaf.jpg";
import img3 from "./developers/tahir.jpg";
import img4 from "./developers/hamad.jpg";

function team(){
  return (
    <div className="background-2">
      <div className="center">
        <h1 className="feature-head">Meet Our Team</h1>
        <hr className="fancy-line"/>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img1} alt="img"/>
          <h3>DUswa Batool</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://in.linkedin.com/in/divyanshu-garg-149b441a9">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img2} alt="img"/>
          <h3>Mushaf Mustafa</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://in.linkedin.com/in/ankit-goyal-07017a182">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img3} alt="img"/>
          <h3>Tahir Qayyum</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://in.linkedin.com/in/krish-garg-8a3a11190">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img4} alt="img"/>
          <h3>Hamad Qadir</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://in.linkedin.com/in/anish-aggarwal-4546841a5">LinkedIn</a>
      </div>
    </div>
  );
  }

export default team;
