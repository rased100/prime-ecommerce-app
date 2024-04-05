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
  const { brand, category, rating, price } = filter;

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  let content;

  if (products.length) {
    content = products
      .filter((product) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default ProductList;
