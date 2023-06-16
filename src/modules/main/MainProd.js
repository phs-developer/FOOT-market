import React, { useEffect, useRef } from "react";

export const MainProd = ({ data }) => {
  const animationHandler = useRef(null);

  // 슬라이드 구현
  useEffect(() => {
    const size = window.matchMedia("screen and (max-width:576px)").matches
      ? 300
      : 500;
    let count = 1;
    setInterval(() => {
      // ref 유효성검사
      if (animationHandler.current) {
        if (count < 4) {
          animationHandler.current.style.transform = `translateX(-${
            count * size
          }px)`;
          count++;
        } else {
          animationHandler.current.style.transform = "translateX(0px)";
          count = 1;
        }
      }
    }, 2000);
  }, []);

  if (!Array.isArray(data)) return;

  // mian-prod 생성
  function MakeMainProdItem() {
    let li = [];
    [0, 2, 4, 6].forEach((e) => {
      li.push(
        <div key={e} className="main-box">
          <img className="main-item" src={data[e].img} alt={data[e].img} />
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
          style={{ transform: `translateX(0px)` }}
        >
          <MakeMainProdItem />
        </div>
      </div>
    </div>
  );
};
