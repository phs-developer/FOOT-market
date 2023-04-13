import React from "react";
import { Section } from "./Section.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const Main = ({ data }) => {
  // MoveBtn --> 앵커, top버튼
  const MoveBtn = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };

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
        <div className="top-btn" onClick={scrollToTop}>
          <p>TOP</p>
          <FontAwesomeIcon className="top-moved" icon={faPlane} />
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
          <a href="!#">
            <img src="image/Brand/nike.jpg" alt="나이키" />
          </a>
          <a href="!#">
            <img src="image/Brand/new balance.jpg" alt="나이키" />
          </a>
          <a href="!#">
            <img src="image/Brand/jordan.jpg" alt="나이키" />
          </a>
          <a href="!#">
            <img src="image/Brand/adidas.jpg" alt="나이키" />
          </a>
          <a href="!#">
            <img src="image/Brand/crocs.jpg" alt="나이키" />
          </a>
          <a href="!#">
            <img src="image/Brand/converse.jpg" alt="나이키" />
          </a>
        </div>
      </div>
      <Section className="section" name="slipper" data={data.slipper} />
      <Section className="section" name="shoes" data={data.shoes} />
      <Section className="section" name="other" data={data.other} />
    </div>
  );
};
