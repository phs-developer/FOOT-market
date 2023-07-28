import React from "react";
import { MainProd } from "./MainProd.js";
import { Collection } from "./Collection.js";
import styles from "../section/Section.module.css";
import cx from "clsx";

export const Section = ({ name, data }) => {
  const flexRow = name === "slipper" || name === "other";

  //이벤트 배너
  const Event = () => {
    const src = `image/eventBanner/${name}.jpg`;
    return (
      <div className={styles.eventBanner}>
        <img src={src} alt="이벤트배너" />
      </div>
    );
  };

  // 슬리퍼, 아더 카테고리는 flex-row로 진행되어서 row-content 클래스명 추가

  return (
    <section id={name}>
      <Event />
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>{name.toUpperCase()}</h2>
        <div
          className={cx(styles.contentItem, { [styles.rowContent]: flexRow })}
        >
          <MainProd data={data} name={name} />
          <Collection data={data} name={name} />
        </div>
      </div>
    </section>
  );
};
