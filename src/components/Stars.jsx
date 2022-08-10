import React from "react";
import Star from "./Star";

function Stars({count}) {
	const stars = [];
	let sum;
	if (count >= 1 && count <= 5 && !isNaN(count)) {
		sum = count;
	} else {
		sum = 0;
	}
  for (let i = 1; i <= sum; i++) {
    stars.push("1");
  }
  console.log(stars);
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
