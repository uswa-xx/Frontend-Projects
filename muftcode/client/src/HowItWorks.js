import React, { useState } from "react";
import workapi from "./API/workApi.js";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <section>
      <div className="work-container container">
        <h1 className="main-heading text-center">Team</h1>
        <div className="row">
          {workData.map((curElem) => {
            const { id, logo, title, info } = curElem;
            return (
              <div key={id} className="col-12 col-lg-4 text-center work-container-subdiv">
                <i className={`fontawesome-style ${logo}`}></i>
                <h2 className="sub-heading">{title}</h2>
                <p className="main-hero-para w-100">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
