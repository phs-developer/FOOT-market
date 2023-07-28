import React from "react";
import styles from "../section/Section.module.css";

export const Collection = ({ data, name }) => {
  if (!Array.isArray(data)) return;

  let length = name === "slipper" || name === "other" ? 9 : 6;

  function MakeProdItem() {
    let item = [];
    for (let i = 0; i < length; i++) {
      item.push(
        <li key={data[i].name} className={styles.prodItem}>
          <img className={styles.prodImg} src={data[i].img} alt={data[i].img} />
          <span className={styles.brandName}>{data[i].brand}</span>
          <span>{data[i].name}</span>
        </li>
      );
    }
    return item;
  }

  return (
    <div className={styles.collection}>
      <ul className={styles.prodWrap}>
        <MakeProdItem />
      </ul>
    </div>
  );
};
