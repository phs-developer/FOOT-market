import React from "react";
import { ContentItem } from "./ContentItem.js";

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

  return (
    <div id={name} className="section">
      <Event name={name} />
      <div className="content">
        <h2 className="section-title">{sectionTitle}</h2>
        <ContentItem data={data} name={name} />
      </div>
    </div>
  );
};
