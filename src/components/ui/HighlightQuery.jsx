import React from "react";

const HighlightQuery = ({ text, query }) => {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const textSegments = text.split(regex);

  return textSegments.map((item, index) =>
    item.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="text-highlight-color font-bold">
        {item}
      </span>
    ) : (
      item
    )
  );
};

export default HighlightQuery;
