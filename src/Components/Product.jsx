import React from "react";
import "../styles/product.css";

function Product({ image, title, price, description }) {
  return (
    <div className="product">
      <div className="img-box">
        <img src={image} alt="" />
      </div>
      <div>
        <div>Description :{description.slice(0, 50)}</div>
      </div>
      <div className="title-price">
        <p>
          Title:
          <strong style={{ color: "grey" }}> {title.slice(0, 20)}</strong>
        </p>
        <p>
          Price:
          <strong style={{ color: "grey" }}> ${price}</strong>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button>AddToCart</button>
        <button>RemoveCart</button>
      </div>
    </div>
  );
}

export default Product;
