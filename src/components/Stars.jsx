import React from "react";
import Star from "./Star";

function Stars({ count }) {
  const stars = [];
  let sum;
  sum = count >= 1 && count <= 5 && !isNaN(count) ? count : 0;

  for (let i = 0; i < sum; i++) {
    stars.push("1");
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((star, index) => {
        return (
          <li key={index}>
            <Star />
          </li>
        );
      })}
    </ul>
  );
}

export default Stars;
