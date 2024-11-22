import React from "react";
import FilledStar from "../../assets/images/star-filled.svg";
import EmptyStar from "../../assets/images/star-empty.svg";
import Image from "../Image/Image";
import "./Rating.scss";

interface Props {
  rating: number | null | undefined;
}
const Rating = (props: Props) => {
  const createStartRating = (rating: number): boolean[] => {
    const stars: boolean[] = [false, false, false, false, false];

    for (let i = 0; i < rating; i++) {
      stars[i] = true;
    }

    return stars;
  };

  const starRating = createStartRating(props.rating ? props.rating : 0);

  return (
    <>
      <span hidden>rating: {props.rating} stars on 5</span>
      <ul className="rating">
        {starRating.map((star, index) => {
          return (
            <li key={`star-${index}`}>
              {star ? (
                <Image imgsrc={FilledStar} alt="star filled" />
              ) : (
                <Image imgsrc={EmptyStar} alt="star empty" />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Rating;
