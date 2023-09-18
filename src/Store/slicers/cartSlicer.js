import { createSlice } from "@reduxjs/toolkit";

export const cartSlicer = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducer: {
    addToCart: () => {},
    deleteFromCart: () => {},
    clearCart: () => {},
  },
});

export default cartSlicer.reducer;
export const { addToCart, deleteFromCart, clearCart } = cartSlicer.actions;
