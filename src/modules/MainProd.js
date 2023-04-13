import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export const MainProd = ({ props, name }) => {
  // 메인슈즈 3개 슬라이드, 컬레션보다 느리게
  if (!Array.isArray(props)) return;

  return (
    <div className="main-prod">
      <button className="prev btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="prod-wrap">
        <div className="prod-box">
          <img className="prod-item" src={props[7].img} alt={props[7].img} />
        </div>
        <div className="prod-box">
          <img className="prod-item" src={props[5].img} alt={props[5].img} />
        </div>
        <div className="prod-box">
          <img className="prod-item" src={props[0].img} alt={props[0].img} />
        </div>
      </div>
      <button className="next btn">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
