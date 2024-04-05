import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access product ID

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ViewDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null);

  // Fetch product details based on ID (replace with your API call)
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    // const value = parseInt(event.target.value, 10); // Parse input value to number
    // setQuantity(Math.max(1, value)); // Ensure quantity is at least 1
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg font-medium mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            {/* <div className="mr-4">
              <label
                htmlFor="quantity"
                className="text-sm font-medium mb-1 inline-block"
              >
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <input
                  className="px-2"
                  type="number"
                  // value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
            </div> */}
            <button
              onClick={() => dispatch(addToCart(product))}
              type="button"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              // Add click handler for adding to cart
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
