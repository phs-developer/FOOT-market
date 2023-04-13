import React from "react";
import { Event } from "./Event.js";
import { ContentItem } from "./ContentItem.js";

export const Section = ({ name, data }) => {
  return (
    <div id={name} className="section">
      <Event name={name} />
      <div className="content">
        <ContentItem data={data} name={name} />
      </div>
    </div>
  );
};
