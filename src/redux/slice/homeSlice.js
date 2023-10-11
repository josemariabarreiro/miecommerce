import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";
import { products } from "../../data/Products";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allCategories: categories,
    allProducts: products,
    categorySelected: "",
    productsFilterByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.categorySelected = action.payload;

      state.productsFilterByCategory = state.allProducts.filter(
        (el) => el.category === state.categorySelected
      );
    },

    setProductSelected: (state, action) => {
      state.productSelected = action.payload;
    },
  },
});

export const { setCategory, setProductSelected } = homeSlice.actions;

export default homeSlice.reducer;