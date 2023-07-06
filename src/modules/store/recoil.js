import { atom, selector } from "recoil";

//장바구니 상품 id
const prodInLocalStorage = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  prodInLocalStorage.push(localStorage.getItem(key));
}
export const inCart = atom({
  key: "inCart",
  default: prodInLocalStorage,
});

// 장바구니 내 수량
export const totalInCart = selector({
  key: "totalInCart",
  get: ({ get }) => {
    const prod = get(inCart).length;
    return prod;
  },
});
