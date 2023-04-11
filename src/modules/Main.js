import React, { useEffect, useState } from "react";
import { MainProd } from "./MainProd.js";
import { Collection } from "./Collection.js";
import { Event } from "./Event.js";

export const Main = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getFetch() {
      const res = await fetch("product.json");
      const result = await res.json();
      setData(result);
    }
    getFetch();
  }, []);

  return (
    <div id="main">
      <Event />
      <div className="content">
        <MainProd props={data.shoes} />
        <Collection props={data.shoes} />
        <div className="collection"></div>
      </div>
    </div>
  );
};
