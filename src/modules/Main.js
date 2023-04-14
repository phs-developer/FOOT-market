import React, { useState, useEffect } from "react";
import { Section } from "./Section.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  //json 데이터 받기
  const [data, setData] = useState("");
  useEffect(() => {
    async function getFetch() {
      const res = await fetch("product.json");
      const result = await res.json();
      setData(result);
    }
    getFetch();
  }, []);

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
      <Section name="running" data={data.running} />
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
            <img src="image/Brand/new balance.jpg" alt="뉴발란스" />
          </a>
          <a href="!#">
            <img src="image/Brand/jordan.jpg" alt="조던" />
          </a>
          <a href="!#">
            <img src="image/Brand/adidas.jpg" alt="아디다스" />
          </a>
          <a href="!#">
            <img src="image/Brand/crocs.jpg" alt="크록스" />
          </a>
          <a href="!#">
            <img src="image/Brand/converse.jpg" alt="컨버스" />
          </a>
        </div>
      </div>
      <Section name="slipper" data={data.slipper} />
      <Section name="shoes" data={data.shoes} />
      <Section name="other" data={data.other} />
    </div>
  );
};
