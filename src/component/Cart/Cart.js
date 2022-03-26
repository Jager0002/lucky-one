import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, handleChooseOne } = props;
  console.log(cart);
  return (
    <div className="cart">
      <h2>Selected</h2>
      {cart.map((product) => (
        <h2 className="selected-product" key={product.id}>
          {product.name}
        </h2>
      ))}
      <button onClick={handleChooseOne}>Choose One</button>
      <button>Choose Again</button>
    </div>
  );
};

export default Cart;
