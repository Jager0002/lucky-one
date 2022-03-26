import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { id, name, picture: img, price, band } = product;
  return (
    <div className="products">
      <div>
        <div className="image-banner">
          <img src={img} alt="" />
        </div>
        <div>
          <h5>Name: {name}</h5>
          <h5>Price: {price}</h5>
          <h5>Band: {band}</h5>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-add-to-cart"
      >
        Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
