import React, { useState, useEffect, useRef } from "react";

export const MainProd = ({ props }) => {
  const animationHandler = useRef();
  const [index, setIndex] = useState(0);
  const [prodWidth, setProdWidth] = useState(500);

  // 슬라이드 구현
  useEffect(() => {
    setProdWidth(document.getElementsByClassName("main-wrap")[0].clientWidth);
    setTimeout(() => {
      if (animationHandler.current) {
        //useRef() 오류처리
        if (index < 3) {
          setIndex(index + 1);
          animationHandler.current.style.transition = "all 1s";
        } else {
          setIndex(0);
          animationHandler.current.style.transition = "";
        }
      }
    }, 2000);
  }, [index]);

  if (!Array.isArray(props)) return;

  // mian-prod 생성
  function MakeMainProdItem() {
    let li = [];
    const index = [0, 4, 6, 0];
    index.forEach((e, i) => {
      li.push(
        <div key={i} className="main-box">
          <img className="main-item" src={props[e].img} alt={props[e].img} />
        </div>
      );
    });
    return li;
  }

  return (
    <div className="main-prod">
      <div className="prod-hidden">
        <div
          className="main-wrap"
          ref={animationHandler}
          style={{ transform: `translateX(-${index * prodWidth}px)` }}
        >
          <MakeMainProdItem />
        </div>
      </div>
    </div>
  );
};
