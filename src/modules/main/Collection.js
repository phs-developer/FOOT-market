import React from "react";

export const Collection = ({ data, name }) => {
  if (!Array.isArray(data)) return;

  let length = name === "slipper" || name === "other" ? 9 : 6;

  function MakeProdItem() {
    let item = [];
    for (let i = 0; i < length; i++) {
      item.push(
        <li key={data[i].name} className="prod-item">
          <img className="prod-img" src={data[i].img} alt={data[i].img} />
          <span className="brand-name">{data[i].brand}</span>
          <span>{data[i].name}</span>
        </li>
      );
    }
    return item;
  }

  return (
    <div className="collection">
      <ul className="prod-wrap">
        <MakeProdItem />
      </ul>
    </div>
  );
};
