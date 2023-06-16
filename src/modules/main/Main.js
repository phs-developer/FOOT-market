import React from "react";
import { Section } from "./Section.js";
import "./main.css";

export const Main = ({ data }) => {
  // MoveBtn --> 앵커, top버튼
  const MoveBtn = () => {
    return (
      <div>
        <div className="move-wrap">
          <a className="move" href="#running">
            Running
          </a>
          <a className="move" href="#slipper">
            Slipper
          </a>
          <a className="move" href="#shoes">
            Shoes
          </a>
          <a className="move" href="#other">
            Other
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="main">
      <MoveBtn />
      <Section className="section" name="running" data={data.running} />
      <div className="brand-focus">
        <div className="title">
          <h3>Brand focus</h3>
          <span>추천 브랜드</span>
        </div>
        <div className="brand">
          {["nike", "new balance", "jordan", "adidas", "crocs", "converse"].map(
            (e) => {
              return (
                <a href="/" key={e}>
                  <img src={`image/Brand/${e}.jpg`} alt={e} />
                </a>
              );
            }
          )}
        </div>
      </div>
      <Section className="section" name="slipper" data={data.slipper} />
      <Section className="section" name="shoes" data={data.shoes} />
      <Section className="section" name="other" data={data.other} />
    </div>
  );
};
