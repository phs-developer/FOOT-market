import { useRecoilState } from "recoil";
import { inCart } from "../store/recoil.js";

export const ProdItem = ({ data }) => {
  const [cart, setCart] = useRecoilState(inCart);
  // const setCart = useSetRecoilState(inCart);
  // 이름순 정렬
  data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else return 0;
  });

  //담기 활성화->카트 넣기, 담기 비활성화->카트 빼기
  function handleInCart(data, element) {
    element.target.classList.toggle("in-cart");
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
      <li key={e.id} className="prod-item category-item">
        <img className="prod-img" src={e.img} alt={e.img} />
        <span className="brand-name">{e.brand}</span>
        <span>{e.name}</span>
        <span>{Number(e.price).toLocaleString()}원</span>
        <button
          onClick={(element) => {
            handleInCart(e, element);
          }}
          className={cart.includes(e.id) ? "in-cart" : ""}
        >
          담기
        </button>
      </li>
    );
  });
};
