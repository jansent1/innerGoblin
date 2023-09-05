import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  return (
    <div className="container">
      {/* Product 1 */}
      <div className="row">
        <h3>These are my favourite items:</h3>
        <div className="col">
          <img
            src="https://altpickconnects.files.wordpress.com/2021/01/1587136696g.jpg?w=584"
            alt="product1-img"
            className="img-fluid"
          />
        </div>
        <div className="col">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            mi eu lectus tincidunt rutrum. Maecenas laoreet erat at ex tincidunt
            aliquam. Duis eu placerat ex. Sed ac ligula ac nisi lacinia commodo.
            Mauris accumsan, felis ac luctus fringilla, mauris lectus euismod
            enim, a dapibus justo dolor sed risus.{" "}
          </p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="row">
        <div className="col">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            mi eu lectus tincidunt rutrum. Maecenas laoreet erat at ex tincidunt
            aliquam. Duis eu placerat ex. Sed ac ligula ac nisi lacinia commodo.
            Mauris accumsan, felis ac luctus fringilla, mauris lectus euismod
            enim, a dapibus justo dolor sed risus.{" "}
          </p>
        </div>
        <div className="col">
          <img
            src="https://altpickconnects.files.wordpress.com/2021/01/1587136696g.jpg?w=584"
            alt="product2-img"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Take a look at all my products in the shop!
        </button>
      </div>
    </div>
  );
};

export default Product;
