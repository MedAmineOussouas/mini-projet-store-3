import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Context } from "./Context";

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(Context);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-page-container">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <h4>${item.price}</h4>
      <p>{item.description}</p>
      <button className="add-to-cart-btn-2" onClick={() => addToCart(item)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ItemPage;
