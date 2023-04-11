import React from "react";

export const Collection = ({ props }) => {
  // 슈즈 컬렉션 10개, 5개 보이고 반복 슬라이드로
  if (!Array.isArray(props)) return;

  return (
    <div className="collection">
      <ul className="collection-wrap">
        <li className="collection-item">
          <img className="prod-item" src={props[0].img} alt={props[0].img} />
          <span>{props[0].name}</span>
        </li>
        <li className="collection-item">
          <img className="prod-item" src={props[1].img} alt={props[1].img} />
          <span>{props[1].name}</span>
        </li>
        <li className="collection-item">
          <img className="prod-item" src={props[2].img} alt={props[2].img} />
          <span>{props[2].name}</span>
        </li>
        <li className="collection-item">
          <img className="prod-item" src={props[3].img} alt={props[3].img} />
          <span>{props[3].name}</span>
        </li>
        <li className="collection-item">
          <img className="prod-item" src={props[4].img} alt={props[4].img} />
          <span>{props[4].name}</span>
        </li>
        <li className="collection-item">
          <img className="prod-item" src={props[5].img} alt={props[5].img} />
          <span>{props[5].name}</span>
        </li>
      </ul>
    </div>
  );
};
