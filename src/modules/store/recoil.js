import { atom, selector } from "recoil";

//장바구니에 담긴 id 모음
export const inCart = atom({
  key: "inCart",
  default: [],
});

// 장바구니 갯수
export const totalInCart = selector({
  key: "totalInCart",
  get: ({ get }) => {
    const prod = get(inCart).length;
    return prod;
  },
});
