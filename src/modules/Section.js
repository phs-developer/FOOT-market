import React from "react";
import { MainProd } from "./MainProd.js";
import { Collection } from "./Collection.js";
import { Event } from "./Event.js";

export const Section = ({ name, data }) => {
  return (
    <div>
      <Event name={name} />
      <div className="content">
        <MainProd props={data} />
        <Collection props={data} />
        <div className="collection"></div>
      </div>
    </div>
  );
};
