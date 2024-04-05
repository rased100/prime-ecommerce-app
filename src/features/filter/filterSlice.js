import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brand: [],
  category: [],
  keywords: "",
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    brands: (state, action) => {
      const selectedBrand = action.payload;
      state.brand = selectedBrand !== state.brand ? selectedBrand : "";
    },
    categories: (state, action) => {
      const selectedcategory = action.payload;
      state.category =
        selectedcategory !== state.category ? selectedcategory : "";
    },
  },
});

export const { toggle, brands, categories } = filterSlice.actions;

export default filterSlice.reducer;
