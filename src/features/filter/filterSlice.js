import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: [],
  category: [],
  rating: null,
  price: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    brands: (state, action) => {
      const selectedBrand = action.payload;
      state.brand = selectedBrand !== state.brand ? selectedBrand : "";
    },
    categories: (state, action) => {
      const selectedcategory = action.payload;
      state.category =
        selectedcategory !== state.category ? selectedcategory : "";
    },
    filterByRating: (state, action) => {
      const selectedRating = action.payload;
      state.rating = selectedRating;
    },
    filterByPrice: (state, action) => {
      const enteredPriceRange = action.payload; // Get price range string
      const [minPrice, maxPrice] = enteredPriceRange.split("-"); // Split range

      state.price = {
        min: minPrice ? Number(minPrice) : null, // Set min or null
        max: maxPrice ? Number(maxPrice) : null, // Set max or null
      };
    },
  },
});

export const { brands, categories, filterByRating, filterByPrice } =
  filterSlice.actions;

export default filterSlice.reducer;
