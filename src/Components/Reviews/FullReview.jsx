import './Reviews.css';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Vote from "../Votes/Vote";
import VoteButtons from "../Votes/VoteButtons";

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

  
  return (
    <div className="full-review">
      <h3>{review.title}</h3>
      <div className="full-img-container">
      <img src={review.review_img_url} alt={review.title} />
      </div>

      <div className="info">
        <h4>Owner: {review.owner}</h4>
        <h4>Designer: {review.designer}</h4>
        <h4>Category: {review.category}</h4>
        <h4>Date: {review.created_at}</h4>
        <div className="voting-container">
          <Vote votes={review.votes} />
          <VoteButtons id={review_id} review={review} setReview={setReview}/>
        </div>
      </div>
      <p>{review.review_body}</p>
    </div>
  );
}
