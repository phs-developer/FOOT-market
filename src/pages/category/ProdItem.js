import { useRecoilState } from "recoil";
import { inCart } from "../../modules/store/recoil";
import styles from "./category.module.css";
import cx from "clsx";

export const ProdItem = ({ data }) => {
  const [cart, setCart] = useRecoilState(inCart);

  // 이름순 정렬
  data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else return 0;
  });

  //카트에 담기, 로컬스토리지 활용
  function handleInCart(data) {
    if (cart.includes(data.id)) {
      setCart(cart.filter((cart) => cart !== data.id));
      localStorage.removeItem(data.name);
    } else {
      setCart((cart) => [...cart, data.id]);
      localStorage.setItem(data.name, data.id);
    }
  }

  return data.map((e) => {
    return (
      <li key={e.id} className={styles.categoryItem}>
        <img className={styles.prodImg} src={e.img} alt={e.img} />
        <p className={styles.brandImg}>{e.brand}</p>
        <p>{e.name}</p>
        <p>{Number(e.price).toLocaleString()}원</p>
        <button
          onClick={() => {
            handleInCart(e);
          }}
          className={cx({ [styles.inCart]: cart.includes(e.id) })}
        >
          담기
        </button>
      </li>
    );
  });
};
