import React from "react";
import "./Cart";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div className="cart">
      <h2>Selected</h2>
      {cart.map((product, index) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
};

export default Cart;
