import FilterBar from "../FilterBar";
import SampleReviewCard from "./SampleReviewCard";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewGallery() {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    axios.get(`https://pde-games.herokuapp.com/api/reviews`,
    {
      params: {
        category: category
      }
    }).then((res) => {
      setReviews(res.data.reviews);
    });
  }, [category]);

  return (

    <div className="review-gallery">
      <FilterBar />
      {reviews.map((review) => {
        return <SampleReviewCard key={review.review_id} review={review} />;
      })}
      </div>

  );
}
