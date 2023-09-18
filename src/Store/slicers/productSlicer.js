import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "product",
  initialState: {
    loading: false,
    items: [],
    error: null,
    ActualItems: [],
  },
  reducers: {
    productLoading: (state) => {
      state.loading = true;
    },
    productFetched: (state, action) => {
      state.items = action.payload;
      state.ActualItems = action.payload;
      state.loading = false;
      state.error = null;
    },
    productError: (state, action) => {
      state.error = action.payload;
      state.items = [];

      loading = false;
    },
    productSearch: (state, action) => {
      if (action.payload) {
        state.items = state.ActualItems.filter((item) => {
          return item.title.slice(0, 20).toLowerCase().includes(action.payload);
        });
      } else {
        state.items = state.ActualItems;
      }
    },
  },
});

export default productReducer.reducer;
export const {
  productLoading,
  productFetched,
  productError,
  productSearch,
} = productReducer.actions;
