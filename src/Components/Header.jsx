import React from "react";
import "../styles/header.css";
import { useDispatch } from "react-redux";
import { productSearch } from "../Store/slicers/productSlicer";

function Header() {
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(productSearch(e.target.value));
  }

  return (
    <div className="header-box">
      <div>
        <h1>E-Commerce-Web</h1>
        <div>
          <hr />
        </div>
        <div>
          <input
            type="text"
            className="input-search"
            placeholder="Search for products here"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
