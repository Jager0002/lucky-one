import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, handleChooseOne, handleChooseAgain } = props;
  return (
    <div className="cart">
      <h2>Selected</h2>
      {cart.map((product, index) => (
        <h2 className="selected-product" key={product.id + index}>
          {product.name}
        </h2>
      ))}
      <button className="btn btn-choose" onClick={handleChooseOne}>
        Choose One
      </button>
      <br />
      <button className="btn btn-choose" onClick={handleChooseAgain}>
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
