import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    newCart = [...cart, selectedProduct];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="shop-products">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
