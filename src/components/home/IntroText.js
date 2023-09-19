import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IntroText = () => {
  return (
    <section id="introtext">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>FEATURED PROJECT:</h3>
            <h2>THE BIG DRAW</h2>
            <p>
              Nationaal evenement. In Arnhem maar ook Nijmegen worden op ramen
              getekend en kleine events opgezet. Dit om lokale creativelingen en
              illustrators een podium te geven.{" "}
            </p>
            <a href="https://www.thebigdrawnederland.nl">
              https://www.thebigdrawnederland.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroText;
