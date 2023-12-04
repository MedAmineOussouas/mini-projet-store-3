import React, { useContext } from "react";
import { Context } from "./Context";

function AddItemToCart({ item }) {
  const { addToCart } = useContext(Context);
  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(item);
  };

  // console.log(item);
  // console.log(addToCart);

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
}

export default AddItemToCart;
