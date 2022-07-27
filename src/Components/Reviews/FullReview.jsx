import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FullReview() {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pde-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setReview(res.data.review);
      });
  }, [review_id]);

  console.log(review);
  return (
    <div className="full-review">
      <h3 className="full-title">{review.title}</h3>
      <div className="full-img-container">
        <img
          src={review.review_img_url}
          alt={review.title}
          className="full-img"
        />
      </div>
      <h4 className="owner">Owner: {review.owner}</h4>
      <h4 className="designer">Designer: {review.designer}</h4>
      <h4 className="info">Category: {review.category}</h4>
      <div className="votes">Votes</div>
      <p className="full-body">{review.review_body}</p>
    </div>
  );
}
