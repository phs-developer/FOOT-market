import React from "react";
import { ProdItem } from "./ProdItem.js";
import "./category.css";

export const CategoryPage = ({ data, category }) => {
  const prodKeys = Object.keys(data);
  const prodList = [];

  if (category === "all") {
    // all --> 모든 상품 이름순 정렬
    prodKeys.forEach((e) => {
      for (let i = 0; i < data[e].length; i++) {
        prodList.push(data[e][i]);
      }
    });
  } else {
    // 성별만 골라내어 이름순 정렬
    prodKeys.forEach((e) => {
      for (let i = 0; i < data[e].length; i++) {
        if (data[e][i].gender === "Unisex" || data[e][i].gender === category) {
          prodList.push(data[e][i]);
        }
      }
    });
  }

  return (
    <div className="category">
      <h2>{category.toUpperCase()}</h2>
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
