import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { brands, categories } from "../../features/filter/filterSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const { brand, category } = filter;

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  let content;

  if (products.length) {
    content = products
      .filter((product) => {
        if (brand.length) {
          return brand.includes(product.brand);
        }
        return true;
      })
      .filter((product) => {
        if (category.length) {
          return category.includes(product.category);
        }
        return true;
      })

      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  const handleBrands = (selectedBrand) => {
    dispatch(brands(selectedBrand));
  };
  const handleCategories = (selectedcategory) => {
    dispatch(categories(selectedcategory));
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
      {/* categories */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default ProductList;
