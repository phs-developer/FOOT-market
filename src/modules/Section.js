import React from "react";
import { Event } from "./Event.js";
import { ContentItem } from "./ContentItem.js";

export const Section = ({ name, data }) => {
  const sectionTitle = name.toUpperCase();

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
