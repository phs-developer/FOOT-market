import React from "react";
import { Section } from "./Section.js";

export const Main = ({ data }) => {
  return (
    <div id="main">
      <Section name="running" data={data.running} />
      <Section name="slipper" data={data.slipper} />
      <Section name="shoes" data={data.shoes} />
      <Section name="other" data={data.other} />
      {/* <Event name="shoes" />
      <div className="content">
        <MainProd props={data.shoes} />
        <Collection props={data.shoes} />
        <div className="collection"></div>
      </div> */}
    </div>
  );
};
