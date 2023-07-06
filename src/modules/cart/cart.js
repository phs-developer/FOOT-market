import { useRecoilState } from "recoil";
import { inCart } from "../store/recoil.js";
import "./cart.css";

export const Cart = ({ data }) => {
  const [prodId, setProdId] = useRecoilState(inCart);

  // prodId 상품의 정보 추출 -> prodInCart
  const prodKeys = Object.keys(data);
  const prodInCart = [];
  prodKeys.forEach((e) => {
    for (let i = 0; i < data[e].length; i++) {
      if (prodId.includes(data[e][i].id)) {
        prodInCart.push(data[e][i]);
      }
    }
  });
  const total = prodInCart.reduce((acc, curr) => acc + Number(curr.price), 0);

  //삭제버튼
  function handleDeleteInCart(e) {
    setProdId(prodId.filter((prodId) => prodId !== e.id));
    localStorage.removeItem(e.name);
  }

  return (
    <section className="cart">
      <h2>장바구니 ({prodInCart.length})</h2>
      <div>
        <table className="cart-list">
          <thead>
            <tr>
              <th>이미지</th>
              <th>상품명</th>
              <th>판매가</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {prodInCart.map((e) => {
              return (
                <tr key={e.id} className="cart-item">
                  <td>
                    <img src={e.img} alt={e.img} />
                  </td>
                  <td>{e.name}</td>
                  <td>{Number(e.price).toLocaleString()}원</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDeleteInCart(e);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="total">
            <tr>
              <td colSpan="4">총 금액 : {total.toLocaleString()}원</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};
