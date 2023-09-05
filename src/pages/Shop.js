import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  // winkelitems of producten definiëren
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "tentical-guy.jpg" },
    { id: 2, name: "Product 2", price: 24.99, image: "gob-gal-muziek.jpg" },
    { id: 3, name: "Product 3", price: 14.99, image: "oni-gal.jpg" },
    { id: 4, name: "Product 4", price: 2.5, image: "water-fight.jpg" },
    { id: 5, name: "Product 5", price: 9.99, image: "cyclopse-gal.jpg" },
    { id: 6, name: "Product 6", price: 4.99, image: "oni-gal.jpg" },
    { id: 7, name: "Product 7", price: 54.99, image: "tentical-guy.jpg" },
    { id: 8, name: "Product 8", price: 29.99, image: "water-fight.jpg" },
    { id: 9, name: "Product 9", price: 99.99, image: "gob-gal-muziek.jpg" },
  ];

  return (
    <div className="container">
      <h2>Webshop</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`img/${product.image}`}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
