import React from "react";

export const Collection = ({ props }) => {
  // 슈즈 컬렉션 10개, 5개 보이고 반복 슬라이드로
  if (!Array.isArray(props)) return;

  function MakeProdItem({ props }) {
    return (
      <li className="collection-item">
        <img className="prod-item" src={props.img} alt={props.img} />
        <span className="brand-name">{props.brand}</span>
        <span>{props.name}</span>
      </li>
    );
  }

  return (
    <div className="collection">
      <ul className="collection-wrap">
        <MakeProdItem props={props[0]} />
        <MakeProdItem props={props[1]} />
        <MakeProdItem props={props[2]} />
        <MakeProdItem props={props[3]} />
        <MakeProdItem props={props[4]} />
        <MakeProdItem props={props[5]} />
        <MakeProdItem props={props[6]} />
        <MakeProdItem props={props[7]} />
        <MakeProdItem props={props[8]} />
      </ul>
    </div>
  );
};
