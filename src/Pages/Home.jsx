import React from "react";

import Header from "../Components/Header";
import Products from "../Components/Products";
function Home() {
  return (
    <div
      style={{
        width: "95vw !important",
        margin: "auto",
        border: "2px solid green",
      }}
    >
      <Header />
      <Products />
    </div>
  );
}

export default Home;
