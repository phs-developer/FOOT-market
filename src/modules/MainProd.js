import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export const MainProd = ({ props }) => {
  const animationHandler = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index < 3) {
        setIndex(index + 1);
        animationHandler.current.style.transition = "all 1s";
      } else {
        setIndex(0);
        animationHandler.current.style.transition = "";
      }
    }, 2000);
  }, [index]);
  if (!Array.isArray(props)) return;

  //버튼 핸들러
  const prevBtn = () => {
    setIndex(index - 1);
  };
  const nextBtn = () => {
    setIndex(index + 1);
  };

  function MakeMainProdItem({ props }) {
    return (
      <div className="prod-box">
        <img className="prod-item" src={props.img} alt={props.img} />
      </div>
    );
  }

  return (
    <div className="main-prod">
      <button className="prev btn" onClick={prevBtn}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="prod-hidden">
        <div
          className="prod-wrap"
          style={{ transform: `translateX(-${index * 500}px)` }}
          ref={animationHandler}
        >
          <MakeMainProdItem props={props[7]} />
          <MakeMainProdItem props={props[5]} />
          <MakeMainProdItem props={props[0]} />
          <MakeMainProdItem props={props[7]} />
        </div>
      </div>
      <button className="next btn" onClick={nextBtn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
