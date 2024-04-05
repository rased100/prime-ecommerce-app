import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart); // Access cart items from your cart slice

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    // Implement logic to calculate total price based on cart items and their prices
    // This is a placeholder, replace with your actual calculation
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price; // Assuming a 'price' property on each item
    });
    return totalPrice;
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg py-4">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <li key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-t-lg"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                  <p className="mb-2">Quantity: {item.quantity}</p>
                  <p className="font-bold">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-b-lg font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="checkout-summary bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <p className="mb-4">Total: ${calculateTotal().toFixed(2)}</p>
          <button
            disabled={cartItems.length === 0}
            type="button"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Place Order
          </button>
        </div>
      )}
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-md mt-4 hover:bg-gray-300"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6 4h5v8h4V4H6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Checkout;
