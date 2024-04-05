import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch if using Redux
import {
  brands,
  categories,
  filterByPrice,
  filterByRating,
} from "../../features/filter/filterSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedBrand, setSelectedBrand] = useState(""); // Set initial state to empty string
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null); // Example price filter state

  const dispatch = useDispatch(); // Get dispatch function (if using Redux)

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    // Dispatch filter action (if using Redux)
    dispatch(brands(e.target.value));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    // Dispatch filter action (if using Redux)
    dispatch(categories(e.target.value));
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
    // Dispatch filter action (if using Redux)
    dispatch(filterByRating(e.target.value));
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    // Dispatch filter action (if using Redux)
    dispatch(filterByPrice(e.target.value));
  };

  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="">
        <li className="mb-10 flex justify-center">Dashboard</li>

        <li className="flex justify-start py-2">
          <select
            className="border w-full px-3 py-2 rounded-md font-semibold"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <option value="">Select Brands</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="OPPO">OPPO</option>
            <option value="Huawei">Huawei</option>
            <option value="Microsoft Surface">Microsoft</option>
          </select>
        </li>
        {/* Filter UI elements  */}
        <li className="flex justify-start py-2">
          <select
            className="border w-full px-3 py-2 rounded-md font-semibold"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
          </select>
        </li>
        {/* Filter UI elements  */}
        <li className="flex justify-start py-2">
          <select
            className="border w-full px-3 py-2 rounded-md font-semibold"
            value={selectedRating}
            onChange={handleRatingChange}
          >
            <option value="">Select Rating</option>
            <option value="1">1 Star Above</option>
            <option value="2">2 Stars Above</option>
            <option value="3">3 Stars Above</option>
            <option value="4">4 Stars Above</option>
            <option value="5">5 Stars Only</option>
          </select>
        </li>
        {/* Filter UI elements  */}
        <li className="flex justify-start py-2">
          <select
            className="border w-full py-2 rounded-md font-semibold"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="">Select Price Range</option>
            <option value="0-500">Under $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="3000+">Over $3,000</option>
          </select>
        </li>
        {/* Filter UI elements  */}
        <li className="flex justify-start ml-4 mt-10">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
