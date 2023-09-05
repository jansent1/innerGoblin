import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IntroText = () => {
  return (
    <section id="introtext">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>FEATURED PRODUCT:</h3>
            <h2>SILK SCREEN GIG POSTER</h2>
            <p>
              I am so excited to announce that Les Claypool commissioned me to
              create their official poster for the 2023 Napa California Gig!
            </p>
            <a href="https://bit.ly/brian-allen-limited-edition">
              Sign up for a notification!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroText;
