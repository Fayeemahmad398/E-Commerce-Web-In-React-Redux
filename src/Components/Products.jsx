import { useEffect } from "react";
import "../styles/products.css";
import Product from "./Product";
import { getProducts } from "../Store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const state = useSelector((store) => {
    return store.products;
  });
  console.log(state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#3c3e3e",
      }}
    >
      <h3>Products</h3>
      {state?.loading && <h2>Loading....</h2>}
      <div className="products-box">
        {state?.items?.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Products;
