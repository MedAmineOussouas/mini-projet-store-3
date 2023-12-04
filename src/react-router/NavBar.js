import React, { useContext } from "react";
import CartIcon from "./img/cart.png";
import { Link } from "react-router-dom";
import { Context } from "./Context";

function NavBar() {
  const { cart } = useContext(Context);
  return (
    <div className="navbar">
      <Link to="/">Store</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">
        <div className="cart">
          <img src={CartIcon} className="cart-icon" />
          <h3>{cart.length}</h3>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
