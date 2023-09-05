import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/myStyles.css";

const ClientReviews = () => {
  return (
    <div className="container">
      <h3>Client Reviews</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="review-card border">
            <img src="img/hardrockcafe.png" alt="Illustration 1" />
            <h4>Review 1</h4>
            <p>
              "I was absolutely blown away by the stunning illustrations I
              received for my children's book. The attention to detail and
              vibrant colors brought the characters to life in ways I couldn't
              have imagined. The illustrator captured the essence of the story
              perfectly, and my readers are in awe. Working with this talented
              artist was a joy, and I can't wait to collaborate on future
              projects!"
            </p>
            <h5>Jimmy Johnson</h5>
            <p>Head of The Hard Rock cafe</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="review-card border">
            <img src="img/mojo.png" alt="Illustration 2" />
            <h4>Review 2</h4>
            <p>
              "I cannot express enough how impressed I am with the illustrations
              created by this talented artist. Their ability to transform my
              character designs into fully realized beings with depth and
              emotion is astounding. The attention to detail in each
              illustration is evident, and it has elevated my project to a whole
              new level. The illustrator's professionalism and open
              communication made the collaboration seamless. I highly recommend
              their services to anyone in need of exceptional artwork."
            </p>
            <h5>@S@P Rocky</h5>
            <p>Mojo Director</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="review-card border">
            <img src="img/dominos.png" alt="Illustration 3" />
            <h4>Review 3</h4>
            <p>
              "Working with this illustrator was an absolute pleasure from start
              to finish. Their ability to bring my vision to life through their
              incredible illustrations is truly remarkable. The attention to
              detail, use of colors, and composition in each artwork is
              stunning. The illustrations have added a new dimension to my
              website, and I've received numerous compliments from visitors. I'm
              grateful for the professionalism, creativity, and timely delivery.
              I highly recommend this talented artist for any project requiring
              top-notch illustrations."
            </p>
            <h5>Jane Doe</h5>
            <p>Marketing department of Domino's</p>
          </div>
        </div>
        <div className="col-md-3 border">
          <div className="review-card">
            <img src="img/okimono.png" alt="Illustration 4" />
            <h4>Review 4</h4>
            <p>
              "I can't say enough positive things about the illustrations
              created by this incredible artist. Their attention to detail and
              ability to capture the essence of my brand in each artwork is
              truly exceptional. The illustrations have become an integral part
              of my marketing materials, making them visually appealing and
              captivating. The collaboration process was smooth, and the
              artist's talent and professionalism shone through at every step. I
              highly recommend their services to anyone in need of high-quality
              illustrations that leave a lasting impression."
            </p>
            <h5>Adam Peterson</h5>
            <p>Okimono T-shirt Shops</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ClientReviews;
