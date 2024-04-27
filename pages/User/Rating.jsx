import React, { useState } from "react";
import Button from "../../components/Button";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className={index <= rating ? "text-yellow-500" : "text-gray-400"}>&#9733;</span>
          </button>
        );
      })}
      <p>Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
