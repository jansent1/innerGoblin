import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Me</h5>
            <p>Willemsplein 34 Arnhem</p>
          </div>
          <div className="col-md-3">
            <h5>Product Reviews</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-3">
            <h5>Categories</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-3">
            <h5>ArtWork Licensing</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright Teun Jansen 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
