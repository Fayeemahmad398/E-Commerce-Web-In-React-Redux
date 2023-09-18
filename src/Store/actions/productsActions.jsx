import axios from "axios";
import {
  productLoading,
  productFetched,
  productError,
} from "../slicers/productSlicer";

export const getProducts = () => {
  console.log("worlking");

  return async (dispatch) => {
    dispatch(productLoading());

    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      console.log(data);
      dispatch(productFetched(data));
    } catch (error) {
      console.log(error);
      dispatch(productError(error));
    }
  };
};
