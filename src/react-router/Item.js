import React from "react";
import AddItemToCart from "./AddItemToCart";
import { Link } from "react-router-dom";

function Item({ image, title, price, desc, id }) {
  const item = { image, title, price, desc };
  // addToCart(item);
  // console.log(item);

  return (
    <>
      <Link to={`/item/${id}`}>
        <li className="product-item">
          <img src={image} alt />
          <br />
          <h2>{title}</h2>
          <br />
          <h4>${price}</h4>
          <br />
          <p className="description">{desc}</p>
          <AddItemToCart item={item} />
          {/* <AddItemToCart addToCart={item}/> */}
        </li>
      </Link>
    </>
  );
}

export default Item;
