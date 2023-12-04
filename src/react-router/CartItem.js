import React, { useContext } from "react";
import { Context } from "./Context";
import RemoveIcon from "./img/delete.png";
import PlusIcon from "./img/plus.png";
import MinusIcon from "./img/minus.png";

function CartItem({ img, title, price, quantity, item }) {
  const { increaseQte, decreaseQte, removeFromCart } = useContext(Context);
  return (
    <>
      <div className="cart-item">
        <img src={img} />
        <div className="desc-container">
          <h2>{title}</h2>
          <h4>${price}</h4>
        </div>
      </div>
      <div className="quantity">
        {/* <button onClick={() => increaseQte(item)}>+</button> */}
        <img src={PlusIcon} onClick={() => increaseQte(item)} />
        <p>Quantity: {quantity}</p>
        {/* <button onClick={() => decreaseQte(item)}>-</button> */}
        <img src={MinusIcon} onClick={() => decreaseQte(item)} />
      </div>
      <div className="remove-item">
        {/* <button onClick={() => removeFromCart(item)}>
        </button> */}
        <img src={RemoveIcon} onClick={() => removeFromCart(item)} />
      </div>
    </>
  );
}

export default CartItem;
