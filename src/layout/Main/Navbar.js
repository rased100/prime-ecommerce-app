import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import logo from "../../assets/prime.png";

const Navbar = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Link to="/cart">
          <li
            title="cart"
            className="bg-indigo-500 p-2 rounded-full relative"
            onClick={toggleCartDrawer}
          >
            <BsFillCartFill className="text-white " />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </li>
        </Link>
      </ul>
      {/* {isCartDrawerOpen && (
        <CartDrawer cartItems={cartItems} onClose={toggleCartDrawer} isOpen />
      )} */}
    </nav>
  );
};

export default Navbar;
