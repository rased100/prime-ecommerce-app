import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredResults = searchTerm
      ? products.filter((product) =>
          product.title?.toLowerCase().includes(searchTerm)
        )
      : products;
    setFilteredProducts(filteredResults);
  }, [products, searchTerm]);

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 rounded-full w-full focus:outline-none"
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
