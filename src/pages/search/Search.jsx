import { ProdItem } from "../category/ProdItem";
import styles from "../category/category.module.css";

export const Search = ({ data }) => {
  const value = document.getElementById("query").value;

  const prodKeys = Object.keys(data);
  const prodList = [];
  prodKeys.forEach((e) => {
    for (let i = 0; i < data[e].length; i++) {
      if (data[e][i].name.includes(value)) {
        prodList.push(data[e][i]);
      }
    }
  });

  return (
    <div className={styles.category}>
      <h2>'{value}' 검색 결과</h2>
      <div className={styles.sortWrap}>
        <span>상품 {prodList.length}</span>
        <button type="button">이름순</button>
      </div>
      <ul className={styles.prodWrap}>
        <ProdItem data={prodList} />
      </ul>
    </div>
  );
};
