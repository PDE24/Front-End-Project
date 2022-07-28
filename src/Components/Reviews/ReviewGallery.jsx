import "./Reviews.css";

import FilterBar from "../FilterBar";
import SampleReviewCard from "./SampleReviewCard";
import Loading from "../../images/loading.gif";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewGallery() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pde-games.herokuapp.com/api/reviews`, {
        params: {
          category: category,
        },
      })
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false)
      });
  }, [category]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Loading} alt={'loading page'} className="bar"/>
      </div>
    )
  }

  return (
    <div className="review-gallery">
      <FilterBar />
      {reviews.map((review) => {
        return <SampleReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
}
