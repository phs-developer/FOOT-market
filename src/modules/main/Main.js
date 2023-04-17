import React from "react";
import { Section } from "./Section.js";
import "./main.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src="image/Brand/nike.jpg" alt="나이키" />
          </Link>
          <Link to="">
            <img src="image/Brand/new balance.jpg" alt="뉴발란스" />
          </Link>
          <Link to="">
            <img src="image/Brand/jordan.jpg" alt="조던" />
          </Link>
          <Link to="">
            <img src="image/Brand/adidas.jpg" alt="아디다스" />
          </Link>
          <Link to="">
            <img src="image/Brand/crocs.jpg" alt="크록스" />
          </Link>
          <Link to="">
            <img src="image/Brand/converse.jpg" alt="컨버스" />
          </Link>
        </div>
      </div>
      <Section className="section" name="slipper" data={data.slipper} />
      <Section className="section" name="shoes" data={data.shoes} />
      <Section className="section" name="other" data={data.other} />
    </div>
  );
};
