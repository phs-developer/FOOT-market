import React from "react";
import { ProdItem } from "./ProdItem.js";

export const Unisex = ({ data, title }) => {
  const prodKeys = Object.keys(data);
  const prodList = [];
  prodKeys.forEach((e) => {
    for (let i = 0; i < data[e].length; i++) {
      if (data[e][i].gender === "Unisex" || data[e][i].gender === title) {
        prodList.push(data[e][i]);
      }
    }
  });

  return (
    <div className="category">
      <h2>{title.toUpperCase()}</h2>
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
