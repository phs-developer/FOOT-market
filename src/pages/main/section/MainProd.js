import React, { useEffect, useRef } from "react";
import styles from "../section/Section.module.css";

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
        <div key={e}>
          <img
            className={styles.mainItem}
            src={data[e].img}
            alt={data[e].img}
          />
        </div>
      );
    });
    return li;
  }

  return (
    <div className={styles.mainProd}>
      <div>
        <div
          className={styles.mainWrap}
          ref={animationHandler}
          style={{ transform: `translateX(0px)` }}
        >
          <MakeMainProdItem />
        </div>
      </div>
    </div>
  );
};
