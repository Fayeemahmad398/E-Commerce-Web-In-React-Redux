import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./slicers/cartSlicer";
import productSlicer from "./slicers/productSlicer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    products: productSlicer,
    cart: cartSlicer,
  },
  middleware: [logger, thunk],
});
console.log(store);
export default store;
