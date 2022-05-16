import React from "react";
import StarRatingComponent from "react-star-rating-component";

const ReviewCard = () => {
  
  return (
    <article className="review-card">
      {/* <img src={pic} alt={name} className="review-img" /> */}
      <div className="review-text">
        <h2 className="review-name">flazn</h2>
        <div className="review-desc">
          {/* <span className="review-rating" title={`${rating} out of 5`}>
           */}
          <span className="review-rating" title={`4 out of 5`}>
            <StarRatingComponent
              name="rating"
              editing={false}
            //   value={rating}
              onStarClick={() => null}
            />
          </span>
          <span className="review-muted">
            Joined :65/65/2003
            {/* <sup>{daySuffix(datum.getUTCDate())}</sup>&ndash;
            {month[datum.getUTCMonth()]}&ndash;{datum.getUTCFullYear()} */}
          </span>
        </div>
        <p className="review-content">
           
            </p>
      </div>
    </article>
  );
};

export default ReviewCard;
