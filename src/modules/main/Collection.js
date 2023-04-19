import React from "react";

export const Collection = ({ props, name }) => {
  // 슈즈 컬렉션 10개, 5개 보이고 반복 슬라이드로
  if (!Array.isArray(props)) return;

  let length = name === "slipper" || name === "other" ? 9 : 6;

  function MakeProdItem({ props }) {
    let item = [];
    for (let i = 0; i < length; i++) {
      item.push(
        <li key={props[i].name} className="prod-item">
          <img className="prod-img" src={props[i].img} alt={props[i].img} />
          <span className="brand-name">{props[i].brand}</span>
          <span>{props[i].name}</span>
        </li>
      );
    }
    return item;
  }

  return (
    <div className="collection">
      <ul className="prod-wrap">
        <MakeProdItem props={props} />
      </ul>
    </div>
  );
};
