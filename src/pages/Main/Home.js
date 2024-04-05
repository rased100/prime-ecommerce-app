import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // Fetch and store all products
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
  };

  useEffect(() => {
    // Filter products based on search term in title
    const filteredResults = searchTerm
      ? products.filter((product) =>
          product.title?.toLowerCase().includes(searchTerm)
        )
      : products; // Display all products if searchTerm is empty
    setFilteredProducts(filteredResults);
  }, [products, searchTerm]); // Re-run when products or search term changes

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
