import React from "react";
import ReactDOM from "react-dom";

import Item from "./Item";
import "./testimonials.css";
import img1 from "../Login/src/components/about/developers/uswa.jpg"
import img2 from "../Login/src/components/about/developers/mushaf.jpg"
import img3 from "../Login/src/components/about/developers/tahir.jpg"
import img4 from "../Login/src/components/about/developers/hamad.jpg"
import Slider from 'infinite-react-carousel';

function Testimonials() {
  return (
    <>
      <div className="back-color">
        <div className="center back-color">
          <h1 className="testimonial-head">Testimonials</h1>
          <hr className="fancy-line"/>
        </div>
        <div className="testimonial-backimg" style={{paddingTop:"4%",paddingBottom:"4%", backgroundColor:"#f6f6f6"}}>
        <Slider dots autoplay={true} wheel={true} autoplaySpeed={4000}>
          <div className="center">
            <h2 className="testimonial-text">Thank you for this amazing website, now I can make delicious recipes with whatever ingredients I have.</h2>
            <img className="testimonial-image" src={img1} alt="dog-profile"/><br/>
            <em>Uswa Batool, Gujar Khan</em>
          </div>
          <div className="center">
            <h2 className="testimonial-text">Image to recipe has made me stunned. I was always curious about some dishes that how can I find the recipe by just having the picture.</h2>
            <img className="testimonial-image" src={img2} alt="dog-profile"/><br/>
            <em>Mushaf Mustafa, Wah Cantt</em>
          </div>
          <div className="center">
            <h2 className="testimonial-text">One of the best and easy to use websites I have ever seen.</h2>
            <img className="testimonial-image" src={img3} alt="dog-profile"/><br/>
            <em>Tahir Qayyum, Jahanian</em>
          </div>
          <div className="center">
            <h2 className="testimonial-text">Never thought I'll find some great recipes on any platform apart from YouTube. Loved it!!!</h2>
            <img className="testimonial-image" src={img4} alt="dog-profile"/><br/>
            <em>Hamad Qadir, AliPur</em>
          </div>
        </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
