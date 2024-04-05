import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log(products, "setProducts");

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const { brand, stock } = filter;

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  //

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (filter.stock || filter.brand.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (filter.brand.length) {
          return filter.brand.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  //

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("Apple"))}
        >
          Apple
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("Samsung"))}
        >
          Sansung
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          // <p>product:{product.length}</p>
        ))} */}

        {/* <p>product.length {product.length}</p> */}
        {content}
      </div>
    </div>
  );
};

export default ProductList;
