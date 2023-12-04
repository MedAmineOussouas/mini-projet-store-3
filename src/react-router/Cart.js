import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import CartItem from "./CartItem";

function Cart() {
  const { cart, totalPrice } = useContext(Context);
  // console.log(cart);

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/login");
  };

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="cart-item-container">
          <CartItem
            img={item.image}
            title={item.title}
            price={item.price}
            desc={item.desc}
            quantity={item.quantity}
            item={item}
          />
        </div>
      ))}
      <div className="total-price">
        <h2>Your Total: ${totalPrice().toFixed(2)}</h2>
        <button onClick={handleConfirm} className="confirm-btn">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Cart;
