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

  // mianItem 4개
  let mainItem = [];
  for (let i = 0; i <= 3; i++) {
    mainItem.push(data[i]);
  }

  return (
    <div className={styles.mainProd}>
      <div>
        <div
          className={styles.mainWrap}
          ref={animationHandler}
          style={{ transform: `translateX(0px)` }}
        >
          {mainItem.map((e) => {
            return (
              <div key={e.id}>
                <img className={styles.mainItem} src={e.img} alt={e.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
