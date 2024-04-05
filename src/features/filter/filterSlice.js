import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brand: [],
  keywords: "",
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    toggleBrands: (state, action) => {
      const selectedBrand = action.payload;
      state.brand = selectedBrand !== state.brand ? selectedBrand : "";
    },
  },
});

export const { toggle, toggleBrands } = filterSlice.actions;

export default filterSlice.reducer;
