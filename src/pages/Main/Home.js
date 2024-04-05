import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products, "setProducts");

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          // <p>product:{product.length}</p>
        ))}

        {/* <p>product.length {product.length}</p> */}
      </div>
    </div>
  );
};

export default Home;
