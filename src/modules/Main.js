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
      <Section name="running" data={data.running} />
      <Section name="slipper" data={data.slipper} />
      <Section name="shoes" data={data.shoes} />
      <Section name="other" data={data.other} />
    </div>
  );
};
