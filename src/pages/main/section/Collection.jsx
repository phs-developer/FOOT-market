import React from "react";
import styles from "../section/Section.module.css";

export const Collection = ({ data, name }) => {
  let item = [];

  // slipper, other 는 9개 상품 노출, 이외는 6개 노출
  const length = name === "slipper" || name === "other" ? 9 : 6;
  for (let i = 0; i < length; i++) {
    item.push(data[i]);
  }

  return (
    <div className={styles.collection}>
      <ul className={styles.prodWrap}>
        {item.map((e) => {
          return (
            <li key={e.id} className={styles.prodItem}>
              <img className={styles.prodImg} src={e.img} alt={e.img} />
              <span className={styles.brandName}>{e.brand}</span>
              <span>{e.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
