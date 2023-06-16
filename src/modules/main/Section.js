import React from "react";
import { MainProd } from "./MainProd.js";
import { Collection } from "./Collection.js";

export const Section = ({ name, data }) => {
  const sectionTitle = name.toUpperCase();

  //이벤트 배너
  const Event = () => {
    const src = `image/eventBanner/${name}.jpg`;
    return (
      <div className="event">
        <img className="event-banner" src={src} alt="이벤트배너" />
      </div>
    );
  };

  // 슬리퍼, 아더 카테고리는 flex-row로 진행되어서 row-content 클래스명 추가
  const contentItem =
    name === "slipper" || name === "other"
      ? "content-item row-content"
      : "content-item";

  return (
    <div id={name} className="section">
      <Event />
      <div className="content">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className={contentItem}>
          <MainProd data={data} name={name} />
          <Collection data={data} name={name} />
        </div>
      </div>
    </div>
  );
};
