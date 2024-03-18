import React, { useState } from "react";
import howToUseData from "../API/howToUse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseData);

  return (
    <section className="common-section our-services">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-5 text-center our-service-leftside-img">
            <img src="./images/img4.jpg" alt="aboutusIMg" />
          </div>

          {/* 1section right side data  */}
          <div className="col-12 col-lg-7 our-services-list">
            <h3 className="mini-title"></h3>
            <h1 className="main-heading">How to use the App?</h1>

            {aboutData.map((curElem) => (
              <div className="row our-services-info" key={curElem.id}>
                <div className="col-1 our-services-number">{curElem.id}</div>
                <div className="col-10 our-services-data">
                  <h2>{curElem.title}</h2>
                  <p className="main-hero-para">{curElem.info}</p>
                </div>
              </div>
            ))}

            <br />
            <button className="btn-style btn-style-border">learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
