import React from "react";
import { MainProd } from "./MainProd.js";
import { Collection } from "./Collection.js";

export const ContentItem = ({ data, name }) => {
  const className =
    name === "slipper" || name === "other"
      ? "content-item row-content"
      : "content-item";

  return (
    <div className={className}>
      <MainProd props={data} name={name} />
      <Collection props={data} />
    </div>
  );
};
