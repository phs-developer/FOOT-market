import { useRecoilValue } from "recoil";
import { inCart } from "../store/recoil.js";
import "./cart.css";

export const Cart = ({ data }) => {
  const cartProd = useRecoilValue(inCart);

  //모든 아이템 중 장바구니 아이템만 뽑기
  const prodKeys = Object.keys(data);
  const allItem = [];
  prodKeys.forEach((e) => {
    for (let i = 0; i < data[e].length; i++) {
      if (cartProd.includes(data[e][i].id)) {
        allItem.push(data[e][i]);
      }
    }
  });
  const total = allItem.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <section className="cart">
      <h2>장바구니</h2>
      <div>
        <ul className="cart-list">
          {allItem.map((e) => {
            return (
              <li key={e.id}>
                <img className="prod-img" src={e.img} alt={e.img} />
                <div>
                  <p>{e.name}</p>
                  <p>{Number(e.price).toLocaleString()}원</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="total">
        <p>상품 갯수 : {allItem.length}</p>
        <p>총 가격 : {total.toLocaleString()}원</p>
      </div>
    </section>
  );
};
