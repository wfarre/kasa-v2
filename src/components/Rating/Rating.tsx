import React from "react";
import FilledStar from "../../assets/images/star-filled.svg";
import EmptyStar from "../../assets/images/star-empty.svg";

interface Props {
  rating: number | null | undefined;
}
const Rating = (props: Props) => {
  const createStartRating = (rating: number): string[] => {
    const stars: string[] = ["empty", "empty", "empty", "empty", "empty"];

    for (let i = 0; i < rating; i++) {
      stars[i] = "filled";
    }

    return stars;
  };

  const starRating = createStartRating(props.rating ? props.rating : 0);

  return (
    <ul className="rating">
      {starRating.map((star, index) => {
        return (
          <li className="image-wrapper" key={`star-${index}`}>
            {star === "filled" ? (
              <img src={FilledStar} alt="" />
            ) : (
              <img src={EmptyStar} alt="" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
