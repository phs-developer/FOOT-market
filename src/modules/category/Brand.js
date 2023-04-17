import React from "react";
import { ProdItem } from "./ProdItem.js";
import "./category.css";

export const Brand = ({ data }) => {
  const prodKeys = Object.keys(data);
  const prodList = [];
  prodKeys.forEach((e) => {
    const length = data[e].length;
    for (let i = 0; i < length; i++) {
      prodList.push(data[e][i]);
    }
  });

  return (
    <div className="category">
      <h2>BRAND</h2>
      <div className="sort-wrap">
        <span>상품 {prodList.length}</span>
        <button type="button">이름순</button>
      </div>
      <ul className="prod-wrap ">
        <ProdItem data={prodList} />
      </ul>
    </div>
  );
};
