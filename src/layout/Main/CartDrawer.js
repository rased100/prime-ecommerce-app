import React from "react";
import ProductCard from "../../components/ProductCard";

const CartDrawer = ({ cartItems, onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-gray-200 opacity-75 z-50">
      <div className="absolute top-10 right-10 bg-white rounded shadow-md p-5 w-80 h-auto overflow-y-auto">
        <h2 className="text-xl font-semibold mb-3">Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="space-y-2">
            {cartItems.map((product) => (
              <li key={product.id}>
                <ProductCard
                  key={product.id}
                  product={product}
                  isCartView={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <button
          className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded py-2 px-4"
          onClick={onClose}
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
