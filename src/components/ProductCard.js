import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
      <Link to={{ pathname: `/product/${product.id}` }}>
        {pathname.includes("cart") && (
          <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500  h-8 w-8 font-bold ">
            <p>{product.quantity} </p>
          </div>
        )}
        <div className="h-52 w-52 mx-auto">
          <img src={product.thumbnail} alt={product.brand} />
        </div>
        <h1 className="font-bold text-center">{product.brand}</h1>
        <p className="text-center font-semibold mb-3">
          Rating: {product.rating}
        </p>
      </Link>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            type="button"
            className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to Cart
          </button>
        )}

        {pathname.includes("cart") && (
          <button
            title="Remove"
            onClick={() => dispatch(removeFromCart(product))}
            className="flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1"
          >
            <p>Remove</p>
            <MdDeleteForever size="25" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
