import './Reviews.css';

import Vote from "../Votes/Vote";
import { Link } from "react-router-dom";


export default function SampleReviewCard({ review }) {
  
    return (
  
        <div className="sample-card">
            <div className="sample-img-container">
                <img src={review.review_img_url} alt={review.title} className="sample-img"/>
            </div>
            <h3 className="sample-title">{review.title}</h3>
            <p className="sample-body">{review.review_body}</p>
            <Vote votes={review.votes}/>
            <Link className='read-more' to={`/review/${review.review_id}`}>
                <p>Read&nbsp;More</p>
            </Link>
       </div>
  );
}

