import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  brands,
  categories,
  filterByPrice,
  filterByRating,
} from "../../features/filter/filterSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const { brand, category, rating, price } = filter; // Access rating state

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  let content;

  if (products.length) {
    content = products
      .filter((product) => {
        // Combine brand, category, rating, and price filters
        if (brand.length && !brand.includes(product.brand)) {
          return false;
        }
        if (category.length && !category.includes(product.category)) {
          return false;
        }

        if (rating !== null && product.rating < Number(rating)) {
          return false;
        }

        if (price !== null) {
          const { min, max } = price;
          if (min !== null && product.price < min) {
            return false;
          }
          if (max !== null && product.price > max) {
            return false;
          }
        }

        return true;
      })
      .map((product) => <ProductCard key={product.id} product={product} />);
  }

  const handleBrands = (selectedBrand) => {
    dispatch(brands(selectedBrand));
  };

  const handleCategories = (selectedcategory) => {
    dispatch(categories(selectedcategory));
  };

  const handleRatingFilter = (selectedRating) => {
    dispatch(filterByRating(selectedRating));
  };
  const handlePriceFilter = (e) => {
    const selectedPriceRange = e.target.value;
    dispatch(filterByPrice(selectedPriceRange));
  };
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <select
          className="border px-3 py-2 rounded-full font-semibold"
          onChange={(e) => handleBrands(e.target.value)}
        >
          <option>Select Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="OPPO">OPPO</option>
          <option value="Huawei">Huawei</option>
          <option value="Microsoft Surface">Microsoft</option>
        </select>
      </div>
      <div className="mb-10 flex justify-end gap-5">
        <select
          className="border px-3 py-2 rounded-full font-semibold"
          onChange={(e) => handleCategories(e.target.value)}
        >
          <option>Select Categories</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
      <div className="mb-10 flex justify-end gap-5">
        <select
          className="border px-3 py-2 rounded-full font-semibold"
          onChange={(e) => handleRatingFilter(e.target.value)}
        >
          <option>Select Rating</option>
          <option value="1">1 Star Above</option>
          <option value="2">2 Stars Above</option>
          <option value="3">3 Stars Above</option>
          <option value="4">4 Stars Above</option>
          <option value="5">5 Stars Only</option>
        </select>
      </div>
      <div className="mb-10 flex justify-end gap-5">
        <select
          className="border px-3 py-2 rounded-full font-semibold"
          onChange={handlePriceFilter}
        >
          <option>Select Price Range</option>
          <option value="0-500">Under $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-1500">$1000 - $1500</option>
          <option value="1500-2000">$1500 - $2000</option>
          <option value="3000+">Over $3,000</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default ProductList;
