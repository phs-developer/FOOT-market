import React from "react";

export const Event = ({ name }) => {
  const src = `image/eventBanner/${name}.jpg`;
  // const src = `image/eventBanner/shoes.jpg`;

  return (
    <div className="event">
      <img className="event-banner" src={src} alt="이벤트배너" />
    </div>
  );
};
