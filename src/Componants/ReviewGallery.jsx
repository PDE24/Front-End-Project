import FilterBar from "./FilterBar";
import SampleReviewCard from "./SampleReviewCard";

import { useState, useEffect } from 'react';
import axios from "axios";

export default function ReviewGallery () {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://pde-games.herokuapp.com/api/reviews').then(res => {
            setReviews(res.data.reviews);
        });
    }, []);



    return (
        <div className="review-gallery">
            <p>Review Gallery</p>
            <FilterBar />
            {reviews.map((review) => {
                return <SampleReviewCard key={review.review_id} review={review}/>
            })}
        </div>
    )
}