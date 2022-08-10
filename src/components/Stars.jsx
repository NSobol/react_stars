import React from "react";
import propTypes from "prop-types";
import Star from "./Star";

function Stars({ count }) {
  const stars = [];
  let sum;
  sum = count >= 1 && count <= 5 && !isNaN(count) ? count : 0;

  for (let i = 1; i <= sum; i++) {
    stars.push("1");
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((star, index) => <Star key={index} />)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: propTypes.number.isRequired,
};

export default Stars;
