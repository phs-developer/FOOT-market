import React from "react";

export const Main = () => {
  async function Data() {
    const response = await fetch("../product.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
  }
  Data();

  return (
    <div id="main">
      <div className="content">
        <div className="main-prod">
          메인슈즈 3개 슬라이드, 컬레션보다 느리게
        </div>
        <div className="collection">
          슈즈 컬렉션 10개, 5개 보이고 반복 슬라이드로
        </div>
        <div className="event">이벤트 배너</div>
      </div>
    </div>
  );
};
