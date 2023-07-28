import React from "react";
import { Section } from "./section/Section.jsx";
import styles from "./main.module.css";

export const Main = ({ data }) => {
  const brand = [
    "nike",
    "new balance",
    "jordan",
    "adidas",
    "crocs",
    "converse",
  ];

  return (
    <div id="main">
      <MoveBtn />
      <Section name="running" data={data.running} />
      <div className={styles.brandFocus}>
        <div className={styles.title}>
          <h3>Brand focus</h3>
          <span>추천 브랜드</span>
        </div>
        <div className={styles.brand}>
          {brand.map((e) => {
            return (
              <a href="/" key={e}>
                <img src={`image/Brand/${e}.jpg`} alt={e} />
              </a>
            );
          })}
        </div>
      </div>
      <Section name="slipper" data={data.slipper} />
      <Section name="shoes" data={data.shoes} />
      <Section name="other" data={data.other} />
    </div>
  );
};

// MoveBtn --> 앵커, top버튼
function MoveBtn() {
  const category = ["Running", "Slipper", "Shoes", "Other"];
  return (
    <div>
      <div className={styles.moveWrap}>
        {category.map((ca) => {
          return (
            <a
              key={ca}
              className={styles.move}
              href={`#${ca.toLocaleLowerCase()}`}
            >
              {ca}{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
}
